import React, { Component } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { SLFTextField } from "./StadtLandFrustComponents/SLFTextField";

export class GameScreen extends Component {
  static displayName = GameScreen.name;

  constructor(props) {
    super(props);
    // var connection = new HubConnectionBuilder().withUrl("/slfhub").build();
    // connection.on("ReceiveMessage", function (user, message) {
    //   var msg = message
    //     .replace(/&/g, "&amp;")
    //     .replace(/</g, "&lt;")
    //     .replace(/>/g, "&gt;");
    //   var encodedMsg = user + " says " + msg;
    //   var li = document.createElement("li");
    //   li.textContent = encodedMsg;
    //   document.getElementById("messagesList").appendChild(li);
    // });

    // connection
    //   .start()
    //   .then(function () {
    //     connection
    //       .invoke("SendMessage", "Neuer User", "Test Nachricht")
    //       .catch(function (err) {
    //         return console.error(err.toString());
    //       });
    //   })
    //   .catch(function (err) {
    //     return console.error(err.toString());
    //   });

    this.state = { categories: { Stadt: "A", Land: "B", Frust: "C" } };
  }

  handleChange(textInput, category) {
    this.setState((state) => {
      state.categories[category] = textInput;
      return state;
    });
  }

  render() {
    return (
      <div>
        <form>
          {Object.entries(this.state.categories).map(([category, value]) => {
            console.log(category);
            return (
              <SLFTextField
                key={category}
                category={category}
                value={value}
                onChange={(textInput) => this.handleChange(textInput, category)}
              ></SLFTextField>
            );
          })}
        </form>
      </div>
    );
  }
}
