import React, { useState } from "react";

const Form = () => {
  let data = [];
  //const [finalData, setfinalData] = useState();
  const [contacts, setContacts] = useState(data);
  const [addFormData, setaddFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
  });
  //const [editFormData, setEditFormData] = useState('')

  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setaddFormData({ ...addFormData, [name]: value });
    // const fieldName = event.target.getAttribute("name");
    // const fieldValue = event.target.value;
    // const newFormData = { ...addFormData };
    // newFormData[fieldName] = fieldValue;
    // setaddFormData(newFormData);
  };
  const onSubmit = (event) => {
    event.preventDefault();
contacts.push(addFormData);
    console.log("addFormData,", contacts);
    setContacts([...contacts]);
    // const newContact = {
    //   id: new Date().getTime().toString(),
    //   fname: addFormData.fname,
    //   lname: addFormData.lname,
    //   email: addFormData.email,
    //   phone: addFormData.phone,
    //   city: addFormData.city,
    // };
    // console.log(newContact);
    // const newContacts = [...contacts, newContact];
    // //console.log(...contacts)
    // setContacts(newContacts);
    // console.log(newContacts);
  };
  const onDelete = (id) => {
    contacts.splice(id, 1);
    setContacts([...contacts]);

    //   console.log(id);
    //   const newContacts = [...contacts];

    //   const index = contacts.findIndex((value) => value.id === id);

    //   newContacts.splice(index, 1);

    //   setContacts(newContacts);
  };

  /*const onEdit=(id)=>{
 let newEdit= contacts.find((value)=>{
   return value.id===id
 });
 console.log(newEdit)
 setContacts(newEdit)
}*/
  const onEdit = (event, i) => {
    event.preventDefault();
    //setEditContactId(value.id);
    console.log(i);
    const formValues = [...contacts];
    addFormData.fname = contacts[i].fname;
    addFormData.lname = contacts[i].lname;
    addFormData.email = contacts[i].email;
    addFormData.phone = contacts[i].phone;
    addFormData.city = contacts[i].city;

    //const newformValues=[...editFormData,formValues]
    console.log(contacts[i].email);
    console.log(contacts[i]);
    console.log(formValues);
    setContacts(formValues);
    //setEditFormData(newformValues);
    //console.log(newformValues)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        Firstname
        <input
          type="text"
          className="formField"
          name="fname"
          onChange={onChange}
        />{" "}
        <br />
        <br />
        Lastname
        <input
          type="text"
          className="formField"
          name="lname"
          onChange={onChange}
        />{" "}
        <br />
        <br />
        Email
        <input
          type="email"
          className="formField"
          name="email"
          onChange={onChange}
        />{" "}
        <br />
        <br />
        Contact
        <input
          type="number"
          className="formField"
          name="phone"
          onChange={onChange}
        />{" "}
        <br />
        <br />
        City
        <input
          type="text"
          className="formField"
          name="city"
          onChange={onChange}
        />{" "}
        <br />
        <br />
        <button className="myButton" type="submit">
          Submit
        </button>
      </form>
      <table className="myTable">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Contact</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((value, i) => {
            // console.log(value.id)
            return (
              <tr className="myData">
                <td>{value.fname}</td>
                <td>{value.lname}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.city}</td>
                <td>
                  <button
                    className="myListButton"
                    onClick={() => {
                      onEdit( i);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="myListButton"
                    onClick={() => {
                      onDelete(i);
                    }}
                  >
                    
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Form;
