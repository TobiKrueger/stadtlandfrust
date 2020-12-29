import React, { Component } from "react";

export class SideScoreBoard extends Component {
  static displayName = SideScoreBoard.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {Object.entries(this.props.players).map(([player, score]) => {
          return (
            <li>
              {player.name}: {score}
            </li>
          );
        })}
      </ul>
    );
  }
}
