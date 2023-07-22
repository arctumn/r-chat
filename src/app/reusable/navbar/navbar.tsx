import { FC } from "react";
import NavBarProfile from "./navbar-profile";

interface NavBarProps {
    roomName: string | undefined,

}
const Navbar: FC<NavBarProps | undefined> = (props: NavBarProps | undefined) => {
    const user = {
        name: "Sem Nome",
        image: "",
        gender: "N.D"
    } as UserDetails
    


    return(
        <nav className="flex flex-row space-between start wrap border">
            <p className="ml-1">R-Chat</p>
            <p>{props?.roomName ? props.roomName : ""}</p>
            <NavBarProfile user={user} />
        </nav>
    )
}

export default Navbar