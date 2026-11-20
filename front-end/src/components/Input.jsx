import { useState } from "react"

const ContactEntry = ({ contacts, setContacts }) => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");


    const HandleName = (e) => {
        setName(e.target.value);
    }

    const HandleCity = (e) => {
        setCity(e.target.value);
    }

    //create a button function to handle the user being added

    //create it into and obj


    const HandleAddContact = () => {

        if (!name, !city) {
            throw new Error("Cannot add an empty name");
        }

        const newContact = {
            id: Date.now(),
            name,
            city
        }

        console.log(newContact);

        setContacts([...contacts, newContact])

        //clean up after adding the new person

        setName('');
        setCity('');
    }



    return (
        <div>
            <div className="contact-name">
                <input type="text"
                    className="border-2 border-grey-600 text-black-600 font-semibold px-4 py-2 rounded-l mb-2"
                    placeholder="Name"
                    value={name}
                    onChange={HandleName}
                ></input>
            </div>
            <div className="contact-city">
                <input type="text"
                    placeholder="City"
                    value={city}
                    onChange={HandleCity}
                    className="border-2 border-grey-600 text-black-600 font-semibold px-4 py-2 rounded-l mb-2"
                />
            </div>
            <button className="border border-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                onClick={HandleAddContact}
            >
                Add contact
            </button>
        </div>
    )
}

export default ContactEntry