import React, { Component } from 'react';
import { sendMessage, getMessage } from '../../api';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    getMessage();

    this.state = {
      msg: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      msg: e.target.value,
    });
  }

  handleSubmit(e) {
    sendMessage(this.state.msg);
    this.setState({
      msg: '',
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.msg} onChange={this.onInputChange} />
          <button type="submit">Send</button>
        </form>
        <ul id="msg" />
      </div>
    );
  }
}

export default Chat;
