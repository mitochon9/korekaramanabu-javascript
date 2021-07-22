import { useCallback, useEffect, useState } from "react";

export const ApiTest = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species`);
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts["results"]);

  return (
    <div>
      {/* {posts.map((post) => {
        return <li key={post.results}>{post.results}</li>;
      })} */}
    </div>
  );
};
