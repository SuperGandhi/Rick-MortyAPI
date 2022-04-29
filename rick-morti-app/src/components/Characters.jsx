import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../store/actions";

// useEffect solo se usa en componentes funcionales
class Characters extends React.Component {
    componentDidMount() {
        this.props.getCharacters()
    }
    render() {
        console.log(this.props)
        return(
            <div>dsdssd</div>
        )

    }
}

function mapStateToProps(state) {
    return{
        characters: state.characters
    }
}


export default connect(mapStateToProps, {getCharacters}) (Characters)