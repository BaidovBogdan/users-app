import LeftAside from "./leftAside/left";
import RightAside from "./rightAside/right";
import "./styles/css.css";

export default function UsersLocalStorage() {
    return (
        <div className="container">
            <div className="left">
                <LeftAside/>
            </div>
            <div className="right">
                <RightAside/>
            </div>
        </div>
    );
}
