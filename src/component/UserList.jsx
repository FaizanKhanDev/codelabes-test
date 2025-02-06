import { useState } from "react";

export default function UserList() {
    /* ==== (state) ==== */
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", age: 23 },
        { id: 2, name: "Bob", age: 27 },
        { id: 3, name: "Charlie", age: 21 },
        { id: 4, name: "Dave", age: 29 },
        { id: 5, name: "Eve", age: 25 },

    ]);

    /* == == (new User state) == */
    const [newUser, setNewUser] = useState({ name: "", age: "" });



    /* ==== (functions|| Remove User From List) ==== */
    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };


    /* ==== (functions|| Add User To List) ==== */
    const addUser = (e) => {
        /* ==== (Prevent Default) ==== */
        e.preventDefault();

        /* ==== (Validation) ==== */
        if (newUser.name && newUser.age) {
            /* ==== (Add User To List) ==== */
            setUsers([
                ...users,
                {
                    id: users.length + 1,
                    name: newUser.name,
                    age: Number.parseInt(newUser.age),
                },
            ]);
            /* ==== (Reset Form) ==== */
            setNewUser({ name: "", age: "" });
        }
    };

    return (
        <div className="container">
            <h2 className="title">User List</h2>
            <ul className="list-container">
                {users.map((user) => (
                    <li key={user.id} className="listItem">
                        <span className="text">
                            {user.name} - {user.age} years old
                        </span>
                        <button
                            onClick={() => removeUser(user.id)}
                            className="buttonRemove"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <form onSubmit={addUser} className="form">
                <div className="formField">
                    <label htmlFor="name" className="label">Name</label>
                    <input
                        placeholder="Enter name"
                        id="name"
                        type="text"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="input"
                        required
                    />
                </div>
                <div className="formField">
                    <label htmlFor="age" className="label">Age</label>
                    <input
                        placeholder="Enter age"
                        id="age"
                        type="number"
                        value={newUser.age}
                        onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                        className="input"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="buttonAdd"
                >
                    Add User
                </button>
            </form>
        </div>
    );
}
