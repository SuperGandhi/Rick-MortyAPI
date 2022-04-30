import { useEffect, useState } from "react"



export default function CharacterDetail (props){
    const [character,setCharacter]= useState(null)
    useEffect(function(){
        let id = props.match.params.id
    // https://rickandmortyapi.com/api/character/2
        fetch ("https://rickandmortyapi.com/api/character/" + id)
        .then((response) =>{
            return response.json()
        })
        .then((json)=>{
            setCharacter(json)
        })
        .cath(error=> console.log(error))
    }, [])
    console.log(character)
    return character? <div>
        <h3>{character.name}</h3>
        <img src={character.image} alt="" />
    </div> : <div>cargando</div>
    // <div>holi</div>
}