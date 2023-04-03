import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const UserDetail = () => {
const [users, setUser] = useState([]);

const {id} = useParams()

useEffect(()=> {
    getUsers();
},[]);

const getUsers = async () =>{
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(response.data);
};

  return (
    <div className="columns mt-5 is-centered">
    
        <div className="column is-half">
            <Link to={`add`} className="button is-success">Add New</Link>

            {users ? (

           
            <div>
               nama { users.name  }
            </div>
             ) : (
                <div>
                    null
                </div>
             )}
            
            {/* <table className="table is-striped is-fullwidth">
                <tbody>
                    {users.map((user, index) => (
                     <tr key={user.id}>
                     <td>{index + 1}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.gender}</td>
                     <td>{user.nowa}</td>
                     <td>
                     </td>
                 </tr>   
//                 {user.namalengkap}                    
                    ))}
                </tbody>
            </table> */}

        </div>
    </div>
  )
}

export default UserDetail