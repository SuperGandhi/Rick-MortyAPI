import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../store/actions";

// useEffect solo se usa en componentes funcionales

function Characters(props){
    console.log(props);
    useEffect(()=>{
        props.getCharacters()
    }, [])
            return(
            <div>
                {
                props.characters.map((character)=>{
                    return <React.Fragment key={character.id}>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt="" />
                    </React.Fragment>
                })
                }
            </div>
        )
    }

// con clases

// class Characters extends React.Component {
//     componentDidMount() {
//         this.props.getCharacters()
//     }
//     render() {
//         console.log(this.props)
//         return(
//             <div>
//                 {
//                 this.props.characters.map((character)=>{
//                     return <React.Fragment key={character.id}>
//                         <h3>{character.name}</h3>
//                         <img src={character.image} alt="" />
//                     </React.Fragment>
//                 })
//                 }
//             </div>
//         )

//     }
// }

function mapStateToProps(state) {
    return{
        characters: state.characters
    }
}


export default connect(mapStateToProps, {getCharacters}) (Characters)