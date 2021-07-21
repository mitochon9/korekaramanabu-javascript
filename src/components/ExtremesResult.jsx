import CountUp from "react-countup";

export const ExtremesResult = ({
  missCount,
  hitCount,
  purposeCount,
  showExtremesResult,
}) => {
  if (showExtremesResult === true) {
    return (
      <div className="py-4">
        <div className="flex justify-center flex-wrap md:flex-row md:gap-6 text-xl mt-2 md:mt-4">
          <span>
            ハズレ
            <CountUp end={missCount} duration={1} />回
          </span>
          <span>
            アタリ
            <CountUp end={hitCount} duration={1} />回
          </span>
          <span className="text-red-400 font-bold">
            大当たり
            <CountUp end={purposeCount} duration={1} />回
          </span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
