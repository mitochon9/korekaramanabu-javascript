import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "src/components/JSorReactBtn/JSorReactBtn.module.css";

export const JSorReactBtn = () => {
  const [react, setReact] = useState(true);
  const router = useRouter();
  useEffect(() => {
    router.pathname == "/" ? setReact(true) : setReact(false);
  }, []);
  const reactPage = () => {
    setReact(true);
  };
  const JSPage = () => {
    setReact(false);
  };
  return (
    <div className="flex justify-center items-center text-center lg:text-2xl">
      <Link href="/">
        <a
          onClick={reactPage}
          className={`px-2 lg:px-8 py-1 lg:py-4 w-20 lg:w-40 font-bold ${
            react === true ? classes.on : classes.off
          }  ${react === true ? classes.react_on : classes.react_off}`}
        >
          React
        </a>
      </Link>
      <Link href="/JSver">
        <a
          onClick={JSPage}
          className={`px-2 lg:px-8 py-1 lg:py-4 w-20 lg:w-40 font-bold ${
            react === true ? classes.off : classes.on
          } ${react === true ? classes.js_off : classes.js_on}`}
        >
          JS
        </a>
      </Link>
    </div>
  );
};
