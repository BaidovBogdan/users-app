import "./button.module.css"
import { ButtonProps } from "./interfaceForBtn"

export default function Button({ children , onClick}: ButtonProps) {

    return( 
        <button onClick={onClick}>{ children }</button>
    )
};
