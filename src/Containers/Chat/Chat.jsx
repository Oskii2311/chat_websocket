import React, { Component } from 'react';
import { sendMessage, getMessage, removeEventListener } from '../../api';
import './Chat.css';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = this.getInitialState();
	}

	getInitialState = () => {
		return {
			msg: '',
			history: [],
		};
	};

	componentDidMount() {
		getMessage(this.handleNewMessage);
	}

	componentWillUnmount() {
		removeEventListener();
	}

	onInputChange = e => {
		this.setState({
			msg: e.target.value,
		});
	};

	handleSubmit = e => {
		sendMessage(this.state.msg);
		this.setState({
			msg: '',
		});
		e.preventDefault();
	};

	handleNewMessage = msg => {
		const { history } = this.state;
		this.setState({ history: [...history, msg] });
	};

	render() {
		const { history, msg } = this.state;
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<input value={msg} onChange={this.onInputChange} />
					<button type="submit">Send</button>
				</form>
				<ul id="msg">
					{history.map((msg, index) => (
						<li key={`message${index}`}>{msg}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Chat;
