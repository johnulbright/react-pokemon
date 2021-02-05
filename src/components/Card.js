import {Link} from 'react-router-dom';
import '../styles/Card.css'; 

const Card = ({name})=>{
    return(
        <div className="pokemon-card" key={name}>
            <Link name = {name} to = {`/pokemon/${name}`}>{name}</Link>
        </div>
    );
};

export default Card;




// const Card = ({name})=>{
//     return(
//         <div key={name} class="pokemon-card" onClick={()=>displayStuff(name)}>
//             <h3>{name}</h3>
//         </div>
       
//     );
// };

// export default Card;

// const displayStuff = (anyName) =>{
//     console.log(anyName);
//     const url=`https://pokeapi.co/api/v2/pokemon/${anyName}`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(json=>{
//         console.log(json);
//         return(
//             <img src = {json.sprites.front_default}/>
            
//         )
//     })
// }



