import { Route , Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import UserCard from "../features/user/components/UserCard";

export default function Routing() {
    return(
        <Routes>
            <Route path="/" Component={UserCard} />
            <Route path="/users" Component={MainPage}/>
        </Routes>
    )
};
