import Image from "next/image";
import hero from "public/hero.png";
import { useEffect, useState } from "react";
import { BonusReact } from "src/components/BonusReact";
import classes from "src/components/Gacha/Gacha.module.css";

const GachaReact = () => {
  const [count, setCount] = useState(0);
  const handleCount = (e) => setCount((e) => e + 1);

  const [missCount, setMissCount] = useState(0);
  const handleMissCount = (e) => setMissCount((e) => e + 1);
  // const handleMissCount = useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMissCount((e) => e + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const [totalMissCount, setTotalMissCount] = useState(0);
  const handletotalMissCount = (e) => setTotalMissCount((e) => e + 1);

  const [hitCount, setHitCount] = useState(0);
  const handleHitCount = (e) => setHitCount((e) => e + 1);

  const [totalHitCount, setTotalHitCount] = useState(0);
  const handletotalHitCount = (e) => setTotalHitCount((e) => e + 1);

  const [purposeCount, setPurposeCount] = useState(0);
  const handlePurposeCount = (e) => setPurposeCount((e) => e + 1);

  const [totalPurposeCount, setTotalPurposeCount] = useState(0);
  const handletotalPurposeCount = (e) => setTotalPurposeCount((e) => e + 1);

  const missPercent =
    count === 0 ? 0 : Math.round((totalMissCount / count) * 10000) / 100;
  const hitPercent =
    count === 0 ? 0 : Math.round((totalHitCount / count) * 10000) / 100;
  const purposePercent =
    count === 0 ? 0 : Math.round((totalPurposeCount / count) * 10000) / 100;

  const moneySpent = count * 280;

  const AmountToJackpot =
    totalPurposeCount === 0
      ? "未当選"
      : `${(Math.round(moneySpent / totalPurposeCount) * 100) / 100}円`;

  // 1から1000のランダムな値を得る関数
  const randomNum = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [gacha, setGacha] = useState([]);

  const handleGacha = (e) => {
    const probability = randomNum();
    // setGacha((e) => [
    //   ...gacha,
    //   {
    //     id: gacha.length,
    //     result:
    //       // ランダムに選ばれた変数が1から880（88％）なら
    //       probability <= 880
    //         ? ITEMS[0].result
    //         : // ランダムに選ばれた変数が881から996（11.6％）なら
    //         probability <= 996
    //         ? ITEMS[1].result
    //         : // ランダムに選ばれた変数が997から1000（0.4％）なら
    //           ITEMS[2].result,
    //   },
    // ]);
    if (probability <= 880) {
      handletotalMissCount();
      handleMissCount();
    } else if (probability <= 996) {
      handletotalHitCount();
      handleHitCount();
    } else {
      handletotalPurposeCount();
      handlePurposeCount();
    }
    handleCount();
  };

  const ITEMS = [
    { result: "ハズレ", count: totalMissCount, percent: missPercent },
    { result: "アタリ", count: totalHitCount, percent: hitPercent },
    { result: "大当たり", count: totalPurposeCount, percent: purposePercent },
  ];

  // 単発ガチャを実行する関数
  const onClickSingle = () => {
    setMissCount((e) => 0);
    setHitCount((e) => 0);
    setPurposeCount((e) => 0);
    handleGacha();
  };

  // 10連ガチャを実行する関数
  const onClickTenConsecutive = () => {
    setMissCount((e) => 0);
    setHitCount((e) => 0);
    setPurposeCount((e) => 0);
    for (let index = 0; index < 10; index++) {
      handleGacha();
    }
  };

  // 大当たりが出るまで実行する関数
  const goToExtremes = (e) => {
    setMissCount((e) => 0);
    setHitCount((e) => 0);
    setPurposeCount((e) => 0);
    for (let index = 0; index < 10000; index++) {
      const probability = randomNum();
      handleCount();
      if (probability <= 880) {
        handletotalMissCount();
        handleMissCount();
      } else if (probability <= 996) {
        handletotalHitCount();
        handleHitCount();
      } else {
        handletotalPurposeCount();
        handlePurposeCount();
        return;
      }
    }
  };

  const reset = (e) => {
    setMissCount((e) => 0);
    setHitCount((e) => 0);
    setPurposeCount((e) => 0);
    setCount((e) => 0);
    setTotalMissCount((e) => 0);
    setTotalHitCount((e) => 0);
    setTotalPurposeCount((e) => 0);
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
          <button onClick={onClickSingle} className="btn btn_basic">
            ガチャを引く
          </button>
          <button onClick={onClickTenConsecutive} className="btn btn_basic">
            10連ガチャを引く
          </button>
          <button onClick={goToExtremes} className="btn btn_caution">
            札束で殴り合う
          </button>
          <button onClick={reset} className="btn btn_basic">
            リセット
          </button>
        </div>

        <div className="py-4">
          <h2 className="text-center font-bold text-2xl">今回の結果</h2>
          <div className="flex flex-col flex-wrap md:flex-row md:gap-6 text-xl mt-2 md:mt-4">
            {/* {gacha.map((result) => {
              return (
                <span key={result.id} className="inline-block">
                  {result.result}
                </span>
              );
            })} */}
            <span>ハズレ{missCount}回</span>
            <span>アタリ{hitCount}回</span>
            <span>大当たり{purposeCount}回</span>
          </div>
        </div>

        <div className="py-4">
          <h2 className="text-center font-bold text-2xl">累計</h2>
          <div className="flex md:flex-row gap-x-4 flex-col">
            {ITEMS.map((item) => {
              return (
                <dl
                  key={item.result}
                  className="flex flex-wrap md:w-4/12 mx-auto md:py-4 w-full py-2"
                >
                  <dt className="w-8/12 md:w-6/12 text-center border border-gray-400 px-1 py-2">
                    <span>{item.result}が出た回数</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span>{item.count}回</span>
                  </dd>
                  <dt className="w-8/12 md:w-6/12 text-center border border-gray-400 px-1 py-2">
                    <span>{item.result}が出た確率</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span>{item.percent}%</span>
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
              <span>{count}回</span>
            </dd>
            <dt className="w-8/12 text-center border border-gray-400 px-1 py-2">
              <span>かかった金額</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span>{moneySpent}円</span>
            </dd>
            <dt className="w-8/12 text-center border border-gray-400 px-1 py-2">
              <span>お目当てキャラを1体引くのにかかった金額</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span>{AmountToJackpot}</span>
            </dd>
          </dl>
        </div>
      </div>

      <BonusReact />
    </div>
  );
};

export default GachaReact;
