import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedSingleUser = useLoaderData();
    const handleUpdateUser = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
    
        const updatedUser ={name,email};
        console.log(updatedUser);
        fetch(`http://localhost:5000/users/${loadedSingleUser._id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                toast.success('User updated successfully')
            }
        })
    }
    return (
        <div>
            <h1>Update information of {loadedSingleUser.name}</h1>
            <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" defaultValue={loadedSingleUser?.name} />
        <br />
         <input type="email" name="email" id=""  defaultValue={loadedSingleUser?.email}/>
         <br />
         <input type="submit" value="Update User" />
         <br />
         <Link to='/'><button type="submit">show users</button></Link>
      </form>
        </div>
    );
};

export default Update;