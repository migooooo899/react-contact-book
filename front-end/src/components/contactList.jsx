import Contact from "./contact"

const ContactList = ({ contacts, setContacts, editing, setEditing }) => {
    return (
        <div >
            <div className="text-xl font-semibold text-gray-800">
                Here are your contacts
            </div>
            <div >
                <Contact contacts={contacts} setContacts={setContacts} editing={editing} setEditing={setEditing} />
            </div>
        </div>
    )
}

export default ContactList