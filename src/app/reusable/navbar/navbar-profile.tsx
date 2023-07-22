'use client'

import { FC, useState } from "react"
import { FaUserCircle } from "react-icons/fa"
interface NavBarProfileProps {
    user: UserDetails
}

const NavBarProfile: FC<NavBarProfileProps> = (props) => {
    const user = props.user
    const [show, setShow] = useState(false)
    return (
    <div>
        <div onClick={() => setShow(!show)} className="mt-1 mr-1 mb-1">
                {user.image !== "" ? <img src={user.image} style={{ width: "32px", height: "32px" }} /> : <FaUserCircle style={{ width: "32px", height: "32px" }} />}
        </div>
        {show &&
                <div className={"border absolute-right mr-1 mt-1"} style={{minWidth:"280px"}}>
                <div className="flex-row">
                    <div className="mr-1 ml-1">
                        {user.image !== "" ? <img src={user.image} style={{ width: "50px", height: "100%" }} /> : <FaUserCircle style={{ width: "50px", height: "100%" }} />}
                    </div>
                    <div className="ml-2">
                        <p className="mb-1 mt-1">{user.name}</p>
                        <p className="mb-1 mt-1">{user.gender}</p>
                    </div>
                </div>
                </div>
        }
    </div>
    )
}


export default NavBarProfile