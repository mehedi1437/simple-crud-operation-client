import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [usersData,setUserdata] = useState(loadedUsers)
  console.log(loadedUsers);

  const handleDelete = (id) => {
    console.log('delete ',id);

    fetch(`http://localhost:5000/users/${id}`,{
        method:'DELETE'

    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount === 1){
            const remaining = usersData.filter(user => user._id  !== id)
            setUserdata(remaining);
            
            toast.success('user deleted successfully');
        }
    })
  };

  return (
    <div>
      {usersData.map((user) => (
        <div key={user._id}>
          <p>
            name : {user.name} Email : {user.email}
            <Link to={`/update/${user._id}`}><button>Edit</button></Link>
            <button onClick={()=>handleDelete(user._id)}  >x</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
