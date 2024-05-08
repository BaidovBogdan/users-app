import axios from "axios";
import { typeForUser } from "../typeForTs/type";

export default async function getUsersFromApi() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const users: typeForUser[] = response.data.map((userData: any) => {
        const { id, name, username, email } = userData;
        console.log({ id, name, username, email });
     });
     return users
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        throw error;
    }
}
