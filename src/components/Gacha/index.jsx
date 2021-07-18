import React from "react";
import Image from "next/image";
import hero from "public/hero.png";
import { Bonus } from "src/components/Bonus";
import classes from "src/components/Gacha/Gacha.module.css";

const tableITEMS = [
  {
    title: "ハズレ",
    countId: "miss",
    percentageID: "missPercentage",
  },
  {
    title: "アタリ",
    countId: "hit",
    percentageID: "hitPercentage",
  },
  {
    title: "お目当てキャラ",
    countId: "bigHit",
    percentageID: "bigHitPercentage",
  },
];

export const Gacha = () => {
  // 初期値の設定
  let missValue = 0;
  let hitValue = 0;
  let bigHitValue = 0;
  let gachaValue = 0;

  // 結果をカウントする関数
  const countResult = () => {
    // resultの要素を取得
    const result = document.getElementById("result");
    // 0から999までランダムに選ばれる関数を変数に格納
    const probability = Math.round(Math.random() * 999);
    // 0から879なら（88％）
    if (probability <= 879) {
      // 各変数をカウント
      missValue += 1;
      gachaValue += 1;
      // ハズレのメッセージを作成して出力
      const missMessage = document.createTextNode("ハズレ！ ");
      result.appendChild(missMessage);
    } else if (probability <= 995) {
      // 各変数をカウント

      hitValue += 1;
      gachaValue += 1;
      // アタリのメッセージを作成して出力
      const hitMessage = document.createTextNode("アタリ！ ");
      result.appendChild(hitMessage);
    } else {
      hitValue += 1;
      bigHitValue += 1;
      gachaValue += 1;
      const bigHitMessage = document.createTextNode("大当たり！ ");
      result.appendChild(bigHitMessage);
    }
  };

  // 結果を表示する関数 単発 10連
  const innerResult = () => {
    const miss = document.getElementById("miss");
    const hit = document.getElementById("hit");
    const bigHit = document.getElementById("bigHit");
    const missPercentage = document.getElementById("missPercentage");
    const hitPercentage = document.getElementById("hitPercentage");
    const bigHitPercentage = document.getElementById("bigHitPercentage");
    const gacha = document.getElementById("gachaValue");
    const money = document.getElementById("money");
    miss.innerHTML = missValue;
    hit.innerHTML = hitValue;
    bigHit.innerHTML = bigHitValue;
    missPercentage.innerHTML =
      Math.round((missValue / gachaValue) * 10000) / 100;
    hitPercentage.innerHTML = Math.round((hitValue / gachaValue) * 10000) / 100;
    bigHitPercentage.innerHTML =
      Math.round((bigHitValue / gachaValue) * 10000) / 100;
    gacha.innerHTML = gachaValue;
    money.innerHTML = gachaValue * 280;
  };

  const single = () => {
    const result = document.getElementById("result");
    result.innerHTML = "";
    countResult();
    innerResult();
  };

  const tenCount = () => {
    const result = document.getElementById("result");
    result.innerHTML = "";
    for (let index = 0; index < 10; index++) {
      countResult();
      innerResult();
    }
  };

  const fullCount = () => {
    let fullCountMissValue = 0;
    let fullCountHitValue = 0;
    let fullCountBigHitValue = 0;
    const missResult = document.getElementById("missResult");
    const hitResult = document.getElementById("hitResult");
    const bigHitResult = document.getElementById("bigHitResult");
    const bigHitMoney = document.getElementById("bigHitMoney");
    missResult.innerHTML = "";
    hitResult.innerHTML = "";
    bigHitResult.innerHTML = "";
    for (let index = 0; index < 10000; index++) {
      const probability = Math.round(Math.random() * 999);
      if (probability <= 879) {
        missValue += 1;
        gachaValue += 1;
        fullCountMissValue += 1;
      } else if (probability <= 996) {
        hitValue += 1;
        gachaValue += 1;
        fullCountHitValue += 1;
      } else {
        bigHitValue += 1;
        gachaValue += 1;
        fullCountBigHitValue += 1;
        bigHitMoney.innerHTML = Math.round((gachaValue * 280) / bigHitValue);
        return bigHitInnerResult(
          fullCountMissValue,
          fullCountHitValue,
          fullCountBigHitValue
        );
      }
    }
  };

  // 結果を表示する関数 出るまでガチャ
  const bigHitInnerResult = (
    fullCountMissValue,
    fullCountHitValue,
    fullCountBigHitValue
  ) => {
    const missResult = document.getElementById("missResult");
    const hitResult = document.getElementById("hitResult");
    const bigHitResult = document.getElementById("bigHitResult");
    const miss = document.getElementById("miss");
    const hit = document.getElementById("hit");
    const bigHit = document.getElementById("bigHit");
    const missPercentage = document.getElementById("missPercentage");
    const hitPercentage = document.getElementById("hitPercentage");
    const bigHitPercentage = document.getElementById("bigHitPercentage");
    const gacha = document.getElementById("gachaValue");
    const money = document.getElementById("money");
    miss.innerHTML = missValue;
    hit.innerHTML = hitValue;
    bigHit.innerHTML = bigHitValue;
    missPercentage.innerHTML =
      Math.round((missValue / gachaValue) * 10000) / 100;
    hitPercentage.innerHTML = Math.round((hitValue / gachaValue) * 10000) / 100;
    bigHitPercentage.innerHTML =
      Math.round((bigHitValue / gachaValue) * 10000) / 100;
    gacha.innerHTML = gachaValue;
    money.innerHTML = gachaValue * 280;
    missResult.innerHTML = fullCountMissValue;
    hitResult.innerHTML = fullCountHitValue;
    bigHitResult.innerHTML = fullCountBigHitValue;
  };

  const resetAll = () => {
    const gacha = document.getElementById("gachaValue");
    const missPercentage = document.getElementById("missPercentage");
    const hitPercentage = document.getElementById("hitPercentage");
    const bigHitPercentage = document.getElementById("bigHitPercentage");
    const money = document.getElementById("money");
    const bigHitMoney = document.getElementById("bigHitMoney");
    missValue = 0;
    miss.innerHTML = missValue;
    hitValue = 0;
    hit.innerHTML = hitValue;
    bigHitValue = 0;
    bigHit.innerHTML = bigHitValue;
    missPercentage.innerHTML = 0;
    hitPercentage.innerHTML = 0;
    bigHitPercentage.innerHTML = 0;
    gachaValue = 0;
    gacha.innerHTML = gachaValue;
    money.innerHTML = 0;
    bigHitMoney.innerHTML = 0;
  };

  return (
    <div>
      <div className="md:py-4 py-0 text-center">
        <div className="container md:py-10 py-4">
          <h1 className="md:text-3xl font-bold flex justify-center text-2xl">
            話題の最強キャラ「太陽の塔子」 を一点狙いしよう！！
          </h1>
          <span className="block text-center text-lg md:text-xl mt-2">
            お目当てキャラ1点狙いシミュレーター
          </span>
        </div>
        <Image
          src={hero}
          alt="メインビジュアル"
          width={720}
          height={540}
          placeholder="blur"
          className={classes.hero_animation}
        />
      </div>
      <span className="container block text-right md:text-base text-sm">
        ※ハズレ確率：88％ アタリ確率：12％ お目当てキャラの出る確率：0.4%
        一回あたりのガチャ単価：280円
      </span>
      <div className="container py-10">
        <div className="text-center flex flex-wrap justify-center gap-4">
          <button onClick={single} className="btn btn_basic">
            ガチャを引く
          </button>
          <button onClick={tenCount} className="btn btn_basic">
            10連ガチャを引く
          </button>
          <button onClick={fullCount} className="btn btn_caution">
            お目当てキャラが出るまで引く
          </button>
          <button onClick={resetAll} className="btn btn_basic">
            リセット
          </button>
        </div>

        <div className="py-4">
          <h2 className="text-center font-bold text-2xl">今回の結果</h2>
          <div className="flex flex-col md:flex-row md:gap-6 text-xl mt-2 md:mt-4">
            <span className="font-bold">単発・10連ガチャ</span>
            <span id="result"></span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-xl mt-4">
            <span className="font-bold">出るまでガチャ</span>
            <div>
              <span>ハズレ</span>
              <span
                id="missResult"
                className="border border-gray-400 px-4 py-1 mx-1"
              >
                0
              </span>
              <span>回</span>
            </div>
            <div>
              <span>アタリ</span>
              <span
                id="hitResult"
                className="border border-gray-400 px-2 py-1 mx-1"
              >
                0
              </span>
              <span>回</span>
            </div>
            <div>
              <span className="text-red-500 font-bold">大当たり！</span>
              <span
                id="bigHitResult"
                className="border border-gray-400 px-2 py-1 mx-1"
              >
                0
              </span>
              <span>回</span>
            </div>
          </div>
        </div>

        <div className="py-4">
          <h2 className="text-center font-bold text-2xl">累計</h2>
          <div className="flex md:flex-row gap-x-4 flex-col">
            {tableITEMS.map((item) => {
              return (
                <dl
                  key={item.title}
                  className="flex flex-wrap md:w-4/12 mx-auto md:py-4 w-full py-2"
                >
                  <dt className="w-8/12 md:w-6/12 text-center border border-gray-400 px-1 py-2">
                    <span>{item.title}が出た回数</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span id={item.countId}>0</span>
                    <span>回</span>
                  </dd>
                  <dt className="w-8/12 md:w-6/12 text-center border border-gray-400 px-1 py-2">
                    <span>{item.title}が出た確率</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span id={item.percentageID}>0</span>
                    <span>%</span>
                  </dd>
                </dl>
              );
            })}
          </div>

          <dl className="flex flex-wrap md:w-6/12 md:ml-auto md:mr-0 py-4 w-full mx-auto">
            <dt className="w-8/12 text-center border border-gray-400 px-1 py-2">
              <span>ガチャを引いた回数</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span id="gachaValue">0</span>
              <span>回</span>
            </dd>
            <dt className="w-8/12 text-center border border-gray-400 px-1 py-2">
              <span>かかった金額</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span id="money">0</span>
              <span>円</span>
            </dd>
            <dt className="w-8/12 text-center border border-gray-400 px-1 py-2">
              <span>お目当てキャラを1体引くのにかかった金額</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span id="bigHitMoney">0</span>
              <span>円</span>
            </dd>
          </dl>
        </div>
      </div>

      <Bonus />
    </div>
  );
};
