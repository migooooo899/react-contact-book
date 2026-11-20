import { useState } from "react";

const Contact = ({ contacts, setContacts, editing, setEditing }) => {
    const [editName, setEditName] = useState("");
    const [editCity, setEditCity] = useState("");

    const handleDelete = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleEdit = (contact) => {
        setEditing(contact.id);
        setEditName(contact.name);
        setEditCity(contact.city);
    };

    const handleSave = (id) => {
        setContacts(
            contacts.map((contact) =>
                contact.id === id
                    ? { ...contact, name: editName, city: editCity }
                    : contact
            )
        );
        setEditing(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    className="bg-white rounded-md p-6 shadow-sm flex flex-col justify-between min-h-40"
                >
                    {editing === contact.id ? (
                        <>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    className="border border-gray-300 px-3 py-1.5 rounded text-gray-900 font-semibold"
                                />
                                <input
                                    type="text"
                                    value={editCity}
                                    onChange={(e) => setEditCity(e.target.value)}
                                    className="border border-gray-300 px-3 py-1.5 rounded text-sm text-gray-700"
                                />
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    onClick={() => handleSave(contact.id)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded transition cursor-pointer"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditing(null)}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1.5 rounded transition cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <div className="font-bold text-gray-900 text-lg">
                                    {contact.name}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                    {contact.city}
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-6">
                                <button
                                    onClick={() => handleEdit(contact)}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1.5 rounded transition cursor-pointer"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(contact.id)}
                                    className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium px-3 py-1.5 rounded transition cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Contact;
