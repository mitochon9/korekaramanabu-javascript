import React from "react";
import { JSorReactBtn } from "src/components/JSorReactBtn";

export const Header = () => {
  return (
    <header className="bg-gradient-to-t from-white via-cyan-500 to-lightBlue-500 py-4">
      <JSorReactBtn />

      <h1 className="container md:py-20 md:text-5xl text-center font-bold text-white py-10 text-3xl">
        たかはしの遊び場
      </h1>
    </header>
  );
};
