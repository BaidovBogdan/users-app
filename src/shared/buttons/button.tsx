import "./button.module.css"
import { ButtonProps } from "./typeForBtn"

export default function Button({ children }: ButtonProps) {

    

    return(
    <div>
        <button>{ children }</button>
    </div>
    )
};
