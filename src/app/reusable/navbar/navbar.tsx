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
    


    return <div>
        <div className="flex flex-row space-between start mb-2 wrap">
            <p>R-Chat</p>
            <p>{props?.roomName ? props.roomName : ""}</p>
            <NavBarProfile user={user} />
        </div>
    </div>
}

export default Navbar