import {useEffect,useState} from 'react';


const Pokemon=({match})=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${match.params.name}`;
const [data, setData]=useState();
const initData=async()=>{
    const response = await fetch(url);
    const pokemon = await response.json();

    setData(pokemon);
};
    useEffect(()=>{
        initData();
    },[])
return(
        <div>
            <h1>Pokemon</h1>
        </div>
    )
}

export default Pokemon;

// const Pokemon=(props)=>{
//     const goHome=()=>{
//         props.history.push('/');
//     }
//     const new_url=`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`;
//     let img_url="";
//     fetch(new_url)
//     .then(res=>res.json())
//     .then(json=>{
//         img_url=json.sprites.front_default;
//         console.log(img_url)
//     })
//     return(
//         <div>
//             <button onClick={goHome}>Go home</button>
//             <h1>Pokemon</h1>
//             <p>{props.match.params.name}</p>
//             <img src={`${img_url}`}/>
//         </div>
//     )
// }

// export default Pokemon;