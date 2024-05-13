import Button from "../../../../shared/index";
import Api from "../../../../shared/api";
import { useState } from "react";
import {usersType} from "../../../../shared/TypeUsers";
import { useAtom } from "jotai";
import { usersAtom } from "../../../../shared/jotai/usersAtom";



export default function rightAside() {
    const [users , setUsers] = useState([]);
    const [userDataAtom , setUserDataAtom] = useAtom(usersAtom)


    const ShowUsers = async () => {
        try{
          const usersData = await Api();
          setUsers(usersData);
          setUserDataAtom(usersData)
        }
        catch(error){
          console.log(error);
        }
  
      }
    
    return(
        <>
            <aside>backend
            <br />
            <br />
            <br />
            <Button onClick={ShowUsers}>show</Button>
            <ul>
                {users.length === 0 ? null: users.map((user:usersType) => (
                    <li key={user.id}>
                        name:{user.name}
                         <br /> 
                        phone:{user.phone}
                         <br /> 
                        username:{user.username}
                         <br /> 
                        email:{user.email}
                        <br />
                        <br />
                      </li>
                         
                ))}
            </ul>
            </aside>
        </>
    )
};
