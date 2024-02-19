import toast from "react-hot-toast";
import "./App.css";
import { Link } from "react-router-dom";

function App() {


  const handleAddUser = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user ={name,email};
    console.log(user);
    
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers: {'content-type':'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{ console.log(data)
      if(data.insertedId){
        toast.success('user added succesfully 🤩')
        form.reset();
     }
 
    })
    
  }
  return (
    <>
      <h1>Simple crud</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
         <input type="email" name="email" id="" />
         <br />
         <input type="submit" value="add user" />
         <br />
         <Link to='/users'><button type="submit">show users</button></Link>
      </form>
    </>
  );
}

export default App;
