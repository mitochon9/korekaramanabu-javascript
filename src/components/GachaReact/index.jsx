import Image from "next/image";
import hero from "public/hero.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { BonusReact } from "src/components/BonusReact";
import classes from "src/components/Gacha/Gacha.module.css";
import CountUp from "react-countup";
import { GachaModal } from "src/components/GachaModal";
import { ExtremesResult } from "src/components/ExtremesResult";

export const GachaReact = () => {
  const [react, setReact] = useState(true);
  useEffect(() => {
    setReact(true);
  }, []);

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
  const handleTotalMissCount = (e) => setTotalMissCount((e) => e + 1);

  const [hitCount, setHitCount] = useState(0);
  const handleHitCount = (e) => setHitCount((e) => e + 1);

  const [totalHitCount, setTotalHitCount] = useState(0);
  const handleTotalHitCount = (e) => setTotalHitCount((e) => e + 1);

  const [purposeCount, setPurposeCount] = useState(0);
  const handlePurposeCount = (e) => setPurposeCount((e) => e + 1);

  const [totalPurposeCount, setTotalPurposeCount] = useState(0);
  const handleTotalPurposeCount = (e) => setTotalPurposeCount((e) => e + 1);

  const missPercent =
    count === 0 ? 0 : Math.round((totalMissCount / count) * 10000) / 100;
  const hitPercent =
    count === 0 ? 0 : Math.round((totalHitCount / count) * 10000) / 100;
  const purposePercent =
    count === 0 ? 0 : Math.round((totalPurposeCount / count) * 10000) / 100;

  const moneySpent = count * 280;

  const AmountToJackpot =
    totalPurposeCount === 0
      ? moneySpent
      : Math.round((moneySpent / totalPurposeCount) * 100) / 100;

  // 1??????1000????????????????????????????????????
  const randomNum = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [gacha, setGacha] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [showExtremesResult, setShowExtremesResult] = useState(false);

  const handleGacha = (e) => {
    const probability = randomNum();
    setGacha((gacha) =>
      // ????????????????????????????????????1??????880???88????????????
      probability <= 880
        ? "????????????"
        : // ????????????????????????????????????881??????996???11.6????????????
        probability <= 996
        ? "????????????"
        : // ????????????????????????????????????997??????1000???0.4????????????
          "???????????????????????????"
    );
    setShowModal(true);
    setShowExtremesResult(false);
    if (probability <= 880) {
      handleTotalMissCount();
      handleMissCount();
    } else if (probability <= 996) {
      handleTotalHitCount();
      handleHitCount();
    } else {
      handleTotalPurposeCount();
      handlePurposeCount();
    }
    handleCount();
  };

  const ITEMS = [
    { result: "?????????", count: totalMissCount, percent: missPercent },
    { result: "?????????", count: totalHitCount, percent: hitPercent },
    {
      result: "????????????",
      count: totalPurposeCount,
      percent: purposePercent,
      img: hero,
    },
  ];

  // ????????????????????????????????????
  const onClickSingle = () => {
    setMissCount((e) => 0);
    setHitCount((e) => 0);
    setPurposeCount((e) => 0);
    handleGacha();
  };

  // 10?????????????????????????????????
  // const onClickTenConsecutive = () => {
  //   setMissCount((e) => 0);
  //   setHitCount((e) => 0);
  //   setPurposeCount((e) => 0);
  //   for (let index = 0; index < 10; index++) {
  //     handleGacha();
  //   }
  // };

  // ?????????????????????????????????????????????
  const goToExtremes = (e) => {
    setShowExtremesResult(true);
    setMissCount((e) => 0);
    setHitCount((e) => 0);
    setPurposeCount((e) => 0);
    for (let index = 0; index < 10000; index++) {
      const probability = randomNum();
      handleCount();
      if (probability <= 880) {
        handleTotalMissCount();
        handleMissCount();
      } else if (probability <= 996) {
        handleTotalHitCount();
        handleHitCount();
      } else {
        handleTotalPurposeCount();
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
    setShowExtremesResult(false);
  };

  return (
    <div>
      <GachaModal
        result={gacha}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="md:py-4 py-0 text-center">
        <div className="container md:py-10 py-4">
          <h1 className="md:text-3xl font-bold flex justify-center text-2xl">
            ????????????????????????????????????????????? ??????????????????????????????
          </h1>
          <span className="block text-center text-lg md:text-xl mt-2">
            ?????????????????????1??????????????????????????????
          </span>
        </div>
        <Image
          src={hero}
          alt="????????????????????????"
          width={720}
          height={540}
          placeholder="blur"
          className={classes.hero_animation}
        />
      </div>
      <span className="container block text-right md:text-base text-sm">
        ?????????????????????88??? ??????????????????12??? ???????????????????????????????????????0.4%
        ????????????????????????????????????280???
      </span>
      <div className="container py-10">
        <div className="text-center flex flex-wrap justify-center items-center gap-4">
          <button onClick={onClickSingle} className="gacha_btn gacha_btn_basic">
            ????????????
          </button>
          {/* <button onClick={onClickTenConsecutive} className="btn btn_basic">
            10?????????????????????
          </button> */}
          <button
            onClick={goToExtremes}
            className="gacha_btn gacha_btn_caution"
          >
            ??????????????????
          </button>
          <button
            onClick={reset}
            className="gacha_btn gacha_btn_basic w-16 h-16 text-xs"
          >
            ????????????
          </button>
        </div>

        <ExtremesResult
          missCount={missCount}
          hitCount={hitCount}
          purposeCount={purposeCount}
          showExtremesResult={showExtremesResult}
        />

        <div className="py-4">
          <h2 className="text-center font-bold text-2xl">??????</h2>
          <div className="flex md:flex-row gap-x-4 flex-col">
            {ITEMS.map((item) => {
              return (
                <dl
                  key={item.result}
                  className="flex flex-wrap md:w-4/12 mx-auto md:py-4 w-full py-2"
                >
                  <dt className="w-8/12 md:w-6/12 border border-gray-400 px-1 py-2">
                    <span>{item.result}???????????????</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span>
                      <CountUp end={item.count} duration={1} />???
                    </span>
                  </dd>
                  <dt className="w-8/12 md:w-6/12 border border-gray-400 px-1 py-2">
                    <span>{item.result}???????????????</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span>
                      <CountUp end={item.percent} duration={1} decimals={2} />%
                    </span>
                  </dd>
                </dl>
              );
            })}
          </div>

          <dl className="flex flex-wrap md:w-6/12 md:ml-auto md:mr-0 py-4 w-full mx-auto">
            <dt className="w-8/12 border border-gray-400 px-1 py-2">
              <span>???????????????????????????</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span>
                <CountUp end={count} duration={1} />???
              </span>
            </dd>
            <dt className="w-8/12 border border-gray-400 px-1 py-2">
              <span>??????????????????</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span className="text-red-500 font-bold text-lg">
                <CountUp end={moneySpent} duration={1} />???
              </span>
            </dd>
            <dt className="w-8/12 border border-gray-400 px-1 py-2">
              <span>????????????????????????1???????????????????????????????????????</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span className="text-red-500 font-bold text-lg">
                <CountUp end={AmountToJackpot} duration={1} />???
              </span>
            </dd>
          </dl>
        </div>
      </div>

      <BonusReact />
    </div>
  );
};
