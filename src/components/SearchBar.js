import React, { Fragment, useState } from 'react'

// FUNCTION BASED COMPONENT
const SearchBar = () => {
    const [currentValue, setCurrentValue] = useState("test");

    const _onClick = () => {
        console.log("Function Based Component -> ",currentValue);
    };

    const _onChange = (event) => {
        setCurrentValue(event.target.value);
    }

    return (
        <Fragment>
            <input onChange={_onChange}></input>
            <button onClick={_onClick}>Search</button>
        </Fragment>
    );
};

// export default SearchBar;


// CLASS BASED COMPONENT -> Rewriting SearchBar as Class Component
class SearchBarClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentValue: ""
        };
    }

    _onChange = (event) => {
        this.setState({"currentValue": event.target.value});
    }

    _onClick = () => {
        const {currentValue} = this.state;
        console.log("Class Based Comoonent -> ",currentValue);
    }

    render(){
        return (
            <Fragment>
                <input onChange={this._onChange}></input>
                <button onClick={this._onClick}>Search</button>
            </Fragment>
        );
    }
}

export default SearchBarClassComponent;