import "./button.module.css"
import { ButtonProps } from "./interfaceForBtn"

export default function Button({ children , onClick}: ButtonProps) {

    

    return(
    <div>
        <button onClick={onClick}>{ children }</button>
    </div>
    )
};
