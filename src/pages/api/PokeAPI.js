import { useState, useEffect, useCallback } from "react";

const PokeAPI = () => {
  const [name, setName] = useState();

  const getName = useCallback(async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/25/");
    const name = await res.json();
    setName(name);
  }, []);

  useEffect(() => {
    getName();
  }, []);
};
export default PokeAPI;
