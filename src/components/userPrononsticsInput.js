import React, { Component } from 'react'

export class userPrononsticsInput extends Component {
  render() {
    return (
      <form>
        <label>
            Essay:
            <textarea value="Just a test" onChange="Value got" />
        </label>
        
      </form>
    )
  }
}

export default userPrononsticsInput;