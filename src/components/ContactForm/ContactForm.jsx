import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import {Form} from "./ContactForm.styled"



export default class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	}
	handleChange = (event) => {
		console.log(event)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitForm = (event) => {
		event.preventDefault()
		const contact = {
			id: nanoid(5),
			...this.state,
		}
		this.props.addContact(contact)
		this.setState({
			name: '',
			number: ''
		})
	}

  render() {
	return (
		<Form className="contactForm" onSubmit={this.onSubmitForm} action="">
			<TextField type='text' onChange={this.handleChange}
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				value={this.state.name}
				name='name' id="filled-basic" label="Name" variant="filled" />
			<TextField type='tel' onChange={this.handleChange}
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				value={this.state.number}
				name='number' id="filled-basic" label="Number" variant="filled" />
			
			<Button type="submit" variant="contained">Add contact</Button>
		</Form>
	)
  }
}