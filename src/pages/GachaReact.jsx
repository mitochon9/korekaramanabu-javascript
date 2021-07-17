import Image from "next/image";
import hero from "public/hero.png";
import { BonusReact } from "src/components/BonusReact";
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

const GachaReact = () => {
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
          <button>ガチャを引く</button>
          <button>10連ガチャを引く</button>
          <button>お目当てキャラが出るまで引く</button>
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

      <BonusReact />
    </div>
  );
};

export default GachaReact;
