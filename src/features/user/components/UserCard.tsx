import { useEffect } from "react";
import Button from "../../../shared/buttons/button";
import getUsersFromApi from "../api/getUsersFromApi";
import { Link } from "react-router-dom";

export default function UserCard() {
    useEffect(() => {
        const fetchData = async () => {
            await getUsersFromApi();
        };
        fetchData();
    }, []);

    return (
        <div>
            <Link to={"/users"}>
            <Button onClick={getUsersFromApi}>получить юзера</Button>
            </Link>
        </div>
    );
}
