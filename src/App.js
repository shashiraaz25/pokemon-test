
import React, { useEffect, useState } from 'react';
import Exercise from './Component/exercise';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = (props) => {
  const [posts, setPosts] = useState([
]);
  useEffect(() => {
    getArrayData();
  }, [])

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
  const getArrayData = async () => {
    let Data = [];
    const fetchData = await fetch(url).then((res) => res.json());
    for (const pokemon of fetchData.results) {
      const poke = await fetch(pokemon.url).then((res) => res.json());
      const pokeChar = {
        name: poke.name,
        imageUrl: poke.sprites.front_default,
        id: poke.id,
      };
      Data.push(pokeChar);
    }
    setPosts(Data);
  };
  return (
    <div>
      {posts.length !== 0 ? (
        <div>
          <Exercise
            posts={posts}
          />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <h4>Loding.....</h4>
        </div>
      )}


    </div>
  );
}

export default App;
