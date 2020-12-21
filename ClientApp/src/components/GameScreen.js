import React, { Component } from 'react';

export class GameScreen extends Component {
    static displayName = GameScreen.name;

    constructor(props) {
        super(props);
       }



       render() {
        return (
          <div>
            <h1>GameScreen</h1>
            <p>This is a simple GameScreen</p>
            {/* <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button> */}
          </div>
        );
      }


}