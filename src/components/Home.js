import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState();
  const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  
  const initData = async () => {
    const response = await fetch(url);
    const pokemon = await response.json();

    setData(pokemon);
  };

  useEffect(() => {
    initData();
  }, [url]);

  return (
    <div> 
        {data?.previous&&<button onClick={()=>setUrl(data.previous)}>Previous</button>}
        {/** ^ is a concise way to write a ternary that has no "else" condition */}
        {data?.next&&<button onClick={()=>setUrl(data.next)}>Next</button>}
        <div classNames="cards">

      {data?.results.map((pokemon, index) => {
        return <Card name={pokemon.name} key={index}/>;
      })}
      </div>
    </div>
  );
};

export default Home;
