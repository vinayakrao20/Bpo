import UserService from 'src/services/UserService';
import React,{useState ,useEffect} from 'react';


const ListUserComponent = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
    UserService.getAllUsers().then((Response) =>{
        setUsers(Response.data)
        console.log(Response.data);

    }).catch(error=>{
        console.log(error);
    })
    }, [])
    return (

        <div className='container'>
            <h2 className='text-center'>List of User</h2>
            
             <table className="table table-bordered table-striped">
                 <thead>
                 <th>User Id</th>
                 <th>User Email</th>
                 <th>User Password</th>
                 </thead>
             <tbody>
                 {
                     users.map(
                         user =>
                         <tr key={user.id}>
                             <td>{user.id}</td>
                             <td>{user.email}</td>
                             <td>{user.password}</td>
                         </tr>
                     )
                 }
             </tbody>
             </table>
        </div>
    )
}

export default ListUserComponent
