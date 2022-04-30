import React, { useState } from "react";
import {connect} from "react-redux";
import {searchCharacter} from "../store/actions"


function SearchBar (props){
    const [input,setInput] = useState({
        search: ""
    })
    
    
    function onInputChange (evento){
        setInput({
            ...input,
            [evento.target.name] : evento.target.value
        })
    }
    function onSubmit (e){
        e.preventDefault();
        props.searchCharacter(input.search)
        setInput({
            ...input,
            search: "",
        })
    }
        
    return <form onSubmit={onSubmit}>
            <input 
            onChange={this.onInputChange} 
            type="text" 
            placeholder="Buscar personaje" 
            name= "search"
            value ={input.search}
            />
            <button type="submit">Buscar</button>
        </form>
    }




export default connect(null, {searchCharacter})(SearchBar)