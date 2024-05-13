import Button from "../../../../shared/index";
import { useAtomValue } from "jotai";
import { usersAtom } from "../../../../shared/jotai/usersAtom";
import { usersType } from "../../../../shared/TypeUsers";

export default function leftAside() {

    const userData = useAtomValue(usersAtom)

    const toLocalStorage = () => {
        localStorage.setItem("users" , JSON.stringify(userData))
    }


    return(
        <>
            <aside>localStorage:
                <br />
                <br />
                <br />
            <Button onClick={toLocalStorage}>save</Button>

                <ul>
                    {userData.map((user:usersType) => (
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
