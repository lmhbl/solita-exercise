import React from 'react';

const Exercise4 = (props) => {
  return(
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          Anna nimi: <input onChange={props.handleInputChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
      
      <p>Tämä nimi on {props.nameAmount} henkilöllä.</p>
    </div>
  )
      
}

export default Exercise4;