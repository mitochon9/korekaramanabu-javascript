import React from "react";

export const Bonus = () => {
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
    playTime.innerHTML =
      Math.round(((getTimeValue * getDaysValue) / 60) * 100) / 100;
    lossMoney.innerHTML = Math.round(
      ((getTimeValue * getDaysValue) / 60) * 1000
    );
  };

  // bigHitPercentage.innerHTML =
  //   Math.round((bigHitValue / gachaValue) * 10000) / 100;

  return (
    <div className="py-10">
      <h1 className="py-4 md:text-3xl font-bold text-center bg-black text-yellow-300 text-2xl">
        【おまけ】
        <br />
        スマホゲームに捧げた命の時間
      </h1>
      <div className="container py-10">
        <p className="md:text-center text-left flex justify-center">
          課金はしてないからセーフ！と思ったそこのあなた！ 時は金なりですよ！！
        </p>
        <div className="md:text-left flex md:flex-row justify-center gap-8 py-4 flex-col text-center">
          <div>
            <span className="font-bold">
              一日のプレイ時間
              <br />約
            </span>
            <input
              type="number"
              id="playTimeInput"
              placeholder="入力"
              className="input mx-2"
            />
            <span>分</span>
          </div>
          <div>
            <span className="font-bold">
              合計ログイン日数
              <br />約
            </span>
            <input
              type="number"
              id="playDaysInput"
              placeholder="入力"
              className="input mx-2"
            />
            <span>日</span>
          </div>
        </div>

        <div className="text-center py-4">
          <button onClick={calcGameTime} className="btn btn_caution">
            計算する
          </button>
        </div>

        <div className="text-right">
          <div>
            <span>プレイ時間合計</span>
            <span id="playTime" className="text-3xl text-red-500 px-1">
              0
            </span>
            <span>時間</span>
          </div>
          <div>
            <span>時給1,000円計算で </span>
            <span id="lossMoney" className="text-3xl text-red-500 px-1">
              0
            </span>
            <span>円の損失</span>
          </div>
        </div>
      </div>
    </div>
  );
};
