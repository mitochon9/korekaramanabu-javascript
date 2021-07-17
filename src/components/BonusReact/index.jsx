import { useState } from "react";

export const BonusReact = () => {
  const [playTime, setPlayTime] = useState(0);
  const [loginDays, setLoginDays] = useState(0);
  const handleChangePlayTime = (e) => {
    setPlayTime(() => e.target.value);
  };
  const handleChangeLoginDays = (e) => {
    setLoginDays(() => e.target.value);
  };
  const calcPlayTime = () => {
    return playTime;
  };
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
              value={playTime}
              onChange={handleChangePlayTime}
              type="number"
              placeholder="入力"
              className="input mx-2"
            />
            <span className="font-bold">分</span>
          </div>
          <div>
            <span className="font-bold">
              合計ログイン日数
              <br />約
            </span>
            <input
              value={loginDays}
              onChange={handleChangeLoginDays}
              type="number"
              placeholder="入力"
              className="input mx-2"
            />
            <span className="font-bold">日</span>
          </div>
        </div>

        {/* <div className="text-center py-4">
          <button onClick={calcPlayTime} className="btn btn_caution">
            計算する
          </button>
        </div> */}

        <div className="text-center">
          <div>
            <span>プレイ時間合計</span>
            <span className="text-3xl text-red-500 px-1">{loginDays}</span>
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