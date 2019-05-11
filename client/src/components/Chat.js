import React, { Component } from 'react';
import { Chat, addResponseMessage,addResponseChoices, addLinkSnippet, addUserMessage } from 'react-chat-popup';


import logo from './logo.svg'

class Chats extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('Welcome to this awesome chat, i will always respond the same text you entered!')
    addResponseChoices({
      text: 'Sure, take notice that this will be shared with you Manager does your manager, do you want to start?',
      choices: [
        {
          text: 'Yes',
          value: 'yes',
        },
        {
          text: 'No',
          value: 'no',
        },
      ],
    })
  }
  }

  render() {
    return (
      <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"

        />
      </div>
    );
  }
}

export default Chats;
