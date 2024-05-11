import Button from "../../../shared/index";
import { useAtomValue } from "jotai";
import { usersAtom } from "../../../shared/jotai/usersAtom";
import { usersType } from "../../../shared/TypeUsers";

export default function leftAside() {

    const userData = useAtomValue(usersAtom)

    const toLocalStorage = () => {
        localStorage.setItem("users" , JSON.stringify(userData))
    }


    return(
        <>
            <aside>localStorage</aside>
                <br />
                <br />
                <br />
            <Button onClick={toLocalStorage}>save</Button>

                <ul>
                    {userData.map((user:usersType, index) => (
                        <li key={index}>
                            Name: {user.name}, Email: {user.email}
                        </li>
                    ))}
                </ul>



        </>
    )
};
