import { useEffect, useState } from 'react'
import ContactList from './components/contactList';
import ContactEntry from './components/Input';


function App() {

  //make it so that the browser remembers the user when they referesh it 
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(
      "contacts"
    )

    //transforms it back in to an array cause localstorage only stores texts strings

    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [editing, setEditing] = useState(null);

  //save automatically whenever contacts changes

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])


  return (
    <>
      <h1>
        Contact Book
      </h1>
      <p>keep track of where your friends live</p>
      <ContactEntry setContacts={setContacts} contacts={contacts} />
      <ContactList contacts={contacts} setContacts={setContacts} editing={editing} setEditing={setEditing} />
    </>
  )
}

export default App
