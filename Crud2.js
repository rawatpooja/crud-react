import React, {useState} from 'react';
const Crud1 =()=>{
    const [contacts,setContacts]=useState('')
    const[fullName,setFullName]=useState({
       // person:[],
      //  obj:{
        fname:"",
        lname:"",
       // }
    });
    console.log(useState({ fname:"",
    lname:"",}))
    const InputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name)
       // const value=event.target.value;
      //  const name= event.target.name;
      const {name,value}=event.target;

        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]:value
            };
        })

    }
     
    const onSubmits=(event)=>{
        event.preventDefault();
        alert('submitted');
//let person=[];
       // let fname=event.target.value;
//let lname=event.target.value;
     //   useState((fname)=>{
          // fname .push({"fname":fname,"lname":lname});

      //  })

    }

    console.log();
     return(
         <div className="App">
        <h2>Crud with react</h2>
        <form onSubmit={onSubmits}>
       Firstname
          <input type="text" className="formField"  name="fname" value={fullName.fname} onChange={InputEvent}/> <br /><br />
       Lastname
          <input type="text" className="formField"  name="lname" value={fullName.lname} onChange={InputEvent}/> <br /><br />
         <button className="myButton" type="submit">Submit</button>
         </form>
     <table>
     <thead>
              <tr>
                  <th>Fullname</th>
                  <th>Lastname</th>
            </tr>
            </thead>
            <tbody>
            
                {contacts.map((value,i)=>(
                    <tr>
                    <td>{value.fname}</td>
                    <td>{value.lname}</td>
                    </tr>

                ))}
                </tbody>
             
    </table>
           </div>
    )
}
export default Crud1;


sorting part code////


retun(
onClick={() => {
                sorting("country");
              }}

)
const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...items].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setitems(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...items].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setitems(sorted);
      setorder("ASC");
    }
  };
