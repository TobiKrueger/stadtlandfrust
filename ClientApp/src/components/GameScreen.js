import React, { Component } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

export class GameScreen extends Component {
    static displayName = GameScreen.name;

    constructor(props) {
        super(props);
        var connection = new HubConnectionBuilder().withUrl("/slfhub").build();
      connection.on("ReceiveMessage", function (user, message) {
          var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          var encodedMsg = user + " says " + msg;
          var li = document.createElement("li");
          li.textContent = encodedMsg;
          document.getElementById("messagesList").appendChild(li);
      });
      
      connection.start().then(function () {
        connection.invoke("SendMessage", "Neuer User", "Test Nachricht").catch(function (err) {
          return console.error(err.toString());
        });
      }).catch(function (err) {
          return console.error(err.toString());
      });          
    }
    render() {
      return (
          <div>
          <div class="container">
          <div class="row">&nbsp;</div>
          <div class="row">
              <div class="col-2">User</div>
              <div class="col-4"><input type="text" id="userInput" /></div>
          </div>
          <div class="row">
              <div class="col-2">Message</div>
              <div class="col-4"><input type="text" id="messageInput" /></div>
          </div>
          <div class="row">&nbsp;</div>
          <div class="row">
              <div class="col-6">
                  <input type="button" id="sendButton" value="Send Message" />
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <hr />
          </div>
      </div>
      <div class="row">
          <div class="col-6">
              <ul id="messagesList"></ul>
          </div>
      </div>
          </div>
        );
      }


}