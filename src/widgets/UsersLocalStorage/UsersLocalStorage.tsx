import LeftAside from "./leftAside/leftAside";
import RightAside from "./rightAside/rightAside";
import "./styles/styles.css";

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
