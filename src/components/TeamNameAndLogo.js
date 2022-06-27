import React from 'react';

export class TeamNameAndLogo extends React.Component {
  render(props) {
    return (
      <>
        <div>
        <input type="image" img src={this.props.src} alt='Simple Image' width='50px' height='50px' />
      </div>
      <div>
        <b> {this.props.name} </b>
      </div>
      </>
    )
  }
}

export default TeamNameAndLogo;