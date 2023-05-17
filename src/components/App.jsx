import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import Title from './Title/Title';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

 
 

  addContact = (contact) => {
    const { name, number } = contact;
  // if (!name || !number) детсруктуризировали (!contact.name || !contact.number)
    if (!name || !number) {
      alert('Need to add Name or Number');
      return;
    }
  
    const isDuplicateContact = this.state.contacts.some(({ name }) => name === contact.name);
    if (isDuplicateContact) {
      alert(`${name} is already in contacts`);
      return;
    }
  
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  }

  deleteContacts = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }

 // deleteContacts = (id) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id)
  //   }));
  // }
  
  filterContact = (event) => {
    const {value} = event.target
    this.setState({
      filter: value
    })
  }

  handleFilterContact = () => {
    return this.state.contacts.filter(item => {
      return item.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase().trim()) || item.number.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase().trim())
    })
  }

 componentDidMount(){
  
  const contacts = localStorage.getItem("contacts")
  // массив начальное значение, после парса
  const contactsParsed = JSON.parse(contacts)
  console.log(contactsParsed)
  // Как начальное значение задаём componentDidMount, если есть contactsParsed, чтобы небыло null
  if(contactsParsed){
    this.setState({contacts: contactsParsed})
  }
  


 }
 
  componentDidUpdate(prevProps, prevState){
    // если this.state.contacts новое значение массива, не равно prevState.contacts предыдущему значению. Записываем в LocalStorage
    if(this.state.contacts !==prevState.contacts){
   
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
   
   
  }

  render() {
    const filteredContact = this.handleFilterContact()
return(
<Section>
 
  <Title title={'Phonebook'}></Title>
  <Filter  handleChange={this.filterContact} value={this.state.filter}/>
<ContactForm addContact={this.addContact} />
<ContactList deleteContacts={this.deleteContacts}
contacts={filteredContact}


/>

</Section>

)

  }
}