import React from 'react';
import TeamNameAndLogo from "../TeamNameAndLogo";
import UserInput from "../UserInput";

const divStyle = {
    display: 'inline-block',
};

export class Match extends React.Component {
  render() {
    return (
        <div className="App">
            <div>
                <div>
                    Phase : {this.props.phase}
                </div>
                <div>
                    Groupe : {this.props.group}
                </div>
            </div>
            <div style={divStyle}>
                <TeamNameAndLogo src={this.props.logoA} name={this.props.teamA} />
            </div>
            <div style={divStyle}>
                <UserInput />
            </div>
                <div style={divStyle}>
                    <TeamNameAndLogo src={this.props.logoB} name={this.props.teamB} />
                </div>
                <div>
                    <div>
                        Score Final
                    </div>
                    <div> {this.props.score} </div>
                </div>
        </div>
    )
  }
}

export default Match;