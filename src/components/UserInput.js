import React from 'react'

function UserInput(props) {
  const handleSubmit= (e) => {
    e.preventDefault();
    // ???
  }

  return (
    <form onSubmit={e => {handleSubmit(e)}}>
      <label> VS </label>
      <br/>
      <label>Name</label>
      <br />
      <input 
        name='TeamA' 
        type='number'
        min='0'
      />
      <input 
        name='TeamB' 
        type='number'
        min='0'
      />
      <br/>
    </form>
  )
}

export default UserInput;