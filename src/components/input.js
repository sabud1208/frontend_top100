import React from 'react'


const Input = (props) => {
      return (
        <div id="search">
          Filter By Name: <input type="text" value={props.userInput} onChange={props.handleOnChange}/>
        </div>
      )
}

export default Input;
