import React from "react";
import Image from "next/image";
import hero from "public/hero.png";
import { Bonus } from "src/components/Bonus";

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
    title: "太陽の塔子",
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
    const probability = Math.round(Math.random() * 1000);
    if (probability <= 880) {
      missValue += 1;
      gachaValue += 1;
    } else if (probability <= 996) {
      hitValue += 1;
      gachaValue += 1;
    } else {
      hitValue += 1;
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
    countHit.innerHTML = hitValue;
    countBigHit.innerHTML = bigHitValue;
    missPercentage.innerHTML =
      Math.round((missValue / gachaValue) * 10000) / 100;
    hitPercentage.innerHTML = Math.round((hitValue / gachaValue) * 10000) / 100;
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

  return (
    <div>
      <div className="py-4 text-center">
        <h1 className="text-3xl font-bold text-center py-10 sm:text-2xl">
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
        <div className="text-center space-x-4 sm:space-y-2">
          <button onClick={single} className="btn btn_basic">
            ガチャを引く
          </button>
          <button onClick={tenCount} className="btn btn_basic">
            10連ガチャを引く
          </button>
          <button onClick={fullCount} className="btn btn_basic">
            お目当てが出るまで引く
          </button>
        </div>

        <div className="py-4 flex gap-4 sm:flex-col">
          {tableITEMS.map((item) => {
            return (
              <dl
                key={item.title}
                className="flex flex-wrap w-4/12 mx-auto py-4 sm:w-11/12 sm:py-0"
              >
                <dt className="w-6/12 text-center border border-gray-400 px-1 py-2">
                  <span>{item.title}が出た回数</span>
                </dt>
                <dd className="w-6/12 text-right border border-gray-400 px-1 py-2">
                  <span id={item.countId}>0</span>
                  <span>回</span>
                </dd>
                <dt className="w-6/12 text-center border border-gray-400 px-1 py-2">
                  <span>{item.title}の確率</span>
                </dt>
                <dd className="w-6/12 text-right border border-gray-400 px-1 py-2">
                  <span id={item.percentageID}>0</span>
                  <span>%</span>
                </dd>
              </dl>
            );
          })}
        </div>

        <dl className="flex flex-wrap w-4/12 ml-auto mr-0 py-4 sm:w-11/12 sm:mx-auto">
          <dt className="w-6/12 text-center border border-gray-400 px-1 py-2">
            <span>ガチャを引いた回数</span>
          </dt>
          <dd className="w-6/12 text-right border border-gray-400 px-1 py-2">
            <span id="gachaValue">0</span>
            <span>回</span>
          </dd>
          <dt className="w-6/12 text-center border border-gray-400 px-1 py-2">
            <span>かかった金額</span>
          </dt>
          <dd className="w-6/12 text-right border border-gray-400 px-1 py-2">
            <span id="money">0</span>
            <span>円</span>
          </dd>
        </dl>
      </div>

      <Bonus />
    </div>
  );
};
