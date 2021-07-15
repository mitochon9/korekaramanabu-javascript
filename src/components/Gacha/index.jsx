import React from "react";
import Image from "next/image";
import hero from "public/hero.png";

export const Gacha = () => {
  // 初期値の設定
  let missValue = 0;
  let hitValue = 0;
  let bigHitValue = 0;
  let gachaValue = 0;

  // 結果をカウントする関数
  const countResult = () => {
    const probability = Math.round(Math.random() * 1000);
    if (probability <= 880) {
      missValue += 1;
      gachaValue += 1;
    } else if (probability <= 996) {
      hitValue += 1;
      gachaValue += 1;
    } else {
      bigHitValue += 1;
      gachaValue += 1;
    }
  };

  // 結果を表示する関数
  const innerResult = () => {
    const countMiss = document.getElementById("miss");
    const missPercentage = document.getElementById("missPercentage");
    const hitPercentage = document.getElementById("hitPercentage");
    const bigHitPercentage = document.getElementById("bigHitPercentage");
    const countHit = document.getElementById("hit");
    const countBigHit = document.getElementById("bigHit");
    const countGacha = document.getElementById("gachaValue");
    const countMoney = document.getElementById("money");
    countMiss.innerHTML = missValue;
    missPercentage.innerHTML =
      Math.round((missValue / gachaValue) * 10000) / 100;
    countHit.innerHTML = hitValue;
    hitPercentage.innerHTML = Math.round((hitValue / gachaValue) * 10000) / 100;
    countBigHit.innerHTML = bigHitValue;
    bigHitPercentage.innerHTML =
      Math.round((bigHitValue / gachaValue) * 10000) / 100;
    countGacha.innerHTML = gachaValue;
    countMoney.innerHTML = gachaValue * 280;
  };

  const single = () => {
    countResult();
    innerResult();
  };

  const tenCount = () => {
    for (let index = 0; index < 10; index++) {
      countResult();
    }
    innerResult();
  };

  const fullCount = () => {
    for (let index = 0; index < 10000; index++) {
      const probability = Math.round(Math.random() * 1000);
      if (probability <= 880) {
        missValue += 1;
        gachaValue += 1;
      } else if (probability <= 996) {
        hitValue += 1;
        gachaValue += 1;
      } else {
        bigHitValue += 1;
        gachaValue += 1;
        return innerResult();
      }
    }
  };

  const calcGameTime = () => {
    // inputの要素を取得
    const getTimeInput = document.getElementById("playTimeInput");
    const getDaysInput = document.getElementById("playDaysInput");
    // 要素を取得したinputの値を取得
    const getTimeValue = getTimeInput.value;
    const getDaysValue = getDaysInput.value;
    // 出力先を取得
    const playTime = document.getElementById("playTime");
    const lossMoney = document.getElementById("lossMoney");
    // 取得した値を指定した要素に出力
    playTime.innerHTML = (getTimeValue * getDaysValue) / 60;
    lossMoney.innerHTML = ((getTimeValue * getDaysValue) / 60) * 1000;
  };

  return (
    <div>
      <div className="py-4 text-center">
        <h1 className="text-3xl font-bold text-center py-4">
          話題の最強キャラ「太陽の塔子」 を一転狙いしよう！！
        </h1>
        <Image
          src={hero}
          alt="メインビジュアル"
          width={720}
          height={540}
          placeholder="blur"
        />
      </div>
      <span className="container block text-right">
        ※ハズレ確率：88％ アタリ確率：11.6％ 太陽の塔子の出る確率：0.4%
        一回あたりのガチャ単価：280円
      </span>
      <div className="container py-10">
        <div className="text-center space-x-4">
          <button onClick={single} className="btn">
            ガチャを引く
          </button>
          <button onClick={tenCount} className="btn">
            10連ガチャを引く
          </button>
          <button onClick={fullCount} className="btn">
            お目当てが出るまで引く
          </button>
        </div>
        <span>ガチャを引いた回数</span>
        <span id="gachaValue">0</span>
        <span>回</span>
        <br />
        <span>ハズレの回数</span>
        <span id="miss">0</span>
        <span>回</span>
        <br />

        <span>ハズレ確率</span>
        <span id="missPercentage">0</span>
        <span>%</span>
        <br />

        <span>アタリの回数</span>
        <span id="hit">0</span>
        <span>回</span>
        <br />

        <span>アタリ確率</span>
        <span id="hitPercentage">0</span>
        <span>%</span>
        <br />

        <span>太陽の塔子が出た回数</span>
        <span id="bigHit">0</span>
        <span>回</span>
        <br />

        <span>太陽の塔子が出た確率</span>
        <span id="bigHitPercentage">0</span>
        <span>%</span>

        <br />
        <span>かかった金額</span>
        <span id="money">0</span>
        <span>円</span>
      </div>

      <div className="py-10">
        <h1 className="py-4 text-3xl font-bold text-center bg-black text-red-500">
          【おまけ】スマホゲームに捧げた命の時間
        </h1>
        <div className="container">
          <span>
            一日のプレイ時間
            <br />約
          </span>
          <input
            type="number"
            id="playTimeInput"
            placeholder="入力"
            className="input"
          />
          <span>分</span>
          <br />
          <span>
            合計ログイン日数
            <br />約
          </span>
          <input
            type="number"
            id="playDaysInput"
            placeholder="入力"
            className="input"
          />
          <span>日</span>
          <br />
          <button onClick={calcGameTime} className="btn">
            計算
          </button>
          <br />
          <span>合計</span>
          <span id="playTime">0</span>
          <span>時間</span>
          <br />
          <span>時給1,000円計算で約</span>
          <span id="lossMoney">0</span>
          <span>円の損失</span>
        </div>
      </div>
    </div>
  );
};
