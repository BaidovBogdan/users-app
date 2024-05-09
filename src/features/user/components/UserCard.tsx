import { useEffect } from "react";
import Button from "../../../shared/buttons/button";
import getUsersFromApi from "../api/getUsersFromApi";

export default function UserCard() {
    useEffect(() => {
        const fetchData = async () => {
            await getUsersFromApi();
        };
        fetchData();
    }, []);

    return (
        <div>
            <Button onClick={getUsersFromApi}>получить юзера</Button>
        </div>
    );
}
