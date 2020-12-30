import React, { Component } from "react";

export class SideScoreBoard extends Component {
  static displayName = SideScoreBoard.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.players.map((player) => {
          return (
            <li key={player.name}>
              {player.name}: {player.score}
            </li>
          );
        })}
      </ul>
    );
  }
}
