import Image from "next/image";
import hero from "public/hero.png";
import { useState } from "react";
import { BonusReact } from "src/components/BonusReact";
import classes from "src/components/Gacha/Gacha.module.css";

const ITEMS = ["ハズレ", "アタリ", "大当たり"];

const GachaReact = () => {
  // 結果表示させるための関数
  const TheResultsIndicated = () => {
    // 0から999までランダムに選ばれる関数を変数に格納
    const probability = Math.round(Math.random() * 999);
    console.log(probability);
    if (probability <= 879) {
      console.log(ITEMS[0]);
      setGacha(() => ITEMS[0]);
    } else if (probability <= 995) {
      console.log(ITEMS[1]);
      setGacha(() => ITEMS[1]);
    } else {
      console.log(ITEMS[2]);
      setGacha(() => ITEMS[2]);
    }
  };
  const [gacha, setGacha] = useState("結果がここに表示されます");
  const onClickSingle = () => {
    TheResultsIndicated();
  };
  const onClicktenConsecutive = () => {
    for (let index = 0; index < 10; index++) {
      TheResultsIndicated();
    }
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
          <button onClick={onClickSingle}>ガチャを引く</button>
          <button onClick={onClicktenConsecutive}>10連ガチャを引く</button>
          <button>お目当てキャラが出るまで引く</button>
        </div>

        <div className="py-4">
          <h2 className="text-center font-bold text-2xl">今回の結果</h2>
          <div className="flex flex-col md:flex-row md:gap-6 text-xl mt-2 md:mt-4">
            <span className="font-bold">単発・10連ガチャ</span>
            <span>{gacha}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-xl mt-4">
            <span className="font-bold">出るまでガチャ</span>
            <div>
              <span>ハズレ</span>
              <span className="border border-gray-400 px-4 py-1 mx-1">0</span>
              <span>回</span>
            </div>
            <div>
              <span>アタリ</span>
              <span className="border border-gray-400 px-2 py-1 mx-1">0</span>
              <span>回</span>
            </div>
            <div>
              <span className="text-red-500 font-bold">大当たり！</span>
              <span className="border border-gray-400 px-2 py-1 mx-1">0</span>
              <span>回</span>
            </div>
          </div>
        </div>

        <div className="py-4">
          <h2 className="text-center font-bold text-2xl">累計</h2>
          <div className="flex md:flex-row gap-x-4 flex-col">
            {ITEMS.map((item) => {
              return (
                <dl
                  key={item}
                  className="flex flex-wrap md:w-4/12 mx-auto md:py-4 w-full py-2"
                >
                  <dt className="w-8/12 md:w-6/12 text-center border border-gray-400 px-1 py-2">
                    <span>{item}が出た回数</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span>0</span>
                    <span>回</span>
                  </dd>
                  <dt className="w-8/12 md:w-6/12 text-center border border-gray-400 px-1 py-2">
                    <span>{item}が出た確率</span>
                  </dt>
                  <dd className="w-4/12 md:w-6/12 text-right border border-gray-400 px-1 py-2">
                    <span>0</span>
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
              <span>0</span>
              <span>回</span>
            </dd>
            <dt className="w-8/12 text-center border border-gray-400 px-1 py-2">
              <span>かかった金額</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span>0</span>
              <span>円</span>
            </dd>
            <dt className="w-8/12 text-center border border-gray-400 px-1 py-2">
              <span>お目当てキャラを1体引くのにかかった金額</span>
            </dt>
            <dd className="w-4/12 text-right border border-gray-400 px-1 py-2">
              <span>0</span>
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
