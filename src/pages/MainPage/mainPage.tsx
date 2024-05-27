// файл страниц и компонент назызываем с большой буквы mainPage => MainPage
import UsersLocalStorage from "../../features/Users";

// bad 
export default function MainPage() {
    return(
        <UsersLocalStorage/>
    )
}

// norm
// export default function MainPage() {
//   return (
//      <UsersLocalStorage/>
//   )
// };

// good 1
// export default function MainPage() {
//   return <UsersLocalStorage/>
// };

// good 2
// export const MainPage = () => <UsersLocalStorage />