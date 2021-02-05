// import {useEffect,useState} from 'react';


// const Pokemon=({match})=>{
//     const url=`https://pokeapi.co/api/v2/pokemon/${match.params.name}`;
// const [data, setData]=useState();
// const initData=async()=>{
//     const response = await fetch(url);
//     const pokemon = await response.json();

//     setData(pokemon);
// };
//     useEffect(()=>{
//         initData();
//     },[])
// return(
//         <div>
//             <h1>Pokemon</h1>
//         </div>
//     )
// }

// export default Pokemon;
import {useEffect,useState} from 'react';

const Pokemon=(props)=>{
    const [imgUrl,setImgUrl]=useState("");
    const goHome=()=>{
        props.history.push('/');
    }
    const new_url=`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`;
    fetch(new_url)
    .then(res=>res.json())
    .then(json=>{
        setImgUrl(json.sprites.front_default);
    })
    return(
        <div>
            <button onClick={goHome}>Go home</button>
            <h1>Pokemon</h1>
            <p>{props.match.params.name}</p>
            <img src={imgUrl}/>
        </div>
    )
}

export default Pokemon;