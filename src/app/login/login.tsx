"use client"

import { FC, useState } from "react"
import styles from "./login.module.css"
import Loading from "./loading"
import Link from "next/link"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { useRouter } from "next/navigation"
const Login: FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter()

    const login = () => {
        setLoading(true)
        fetch("http://localhost:5053/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify({

                username: username,
                password: password
            }),
        }).then(resp => {
            resp.json().then((result: User) => {
                if (result && result.uuid !== "") {
                    sessionStorage.setItem("USER", JSON.stringify(result))
                    router.push("/dashboard")
                } else {
                    setUsername("")
                    setPassword("")
                    setLoading(false)
                    setError(true)
                }
            })
        })
    }


    return (
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className={styles["login-page"] + " border"}>
            <h1>Iniciar Sessão</h1>
            {loading && <Loading />}
            <div className="" style={{height: "fit-content", width:"100%",display:"flex",justifyContent:"center"}}>
                {!loading && error &&
                    <div>
                        <p>Username ou Password Inválidos</p>
                    </div>
                }
                {!loading &&
                    <div className={styles["login-form"]}>
                        <div>
                            <div className={styles["login-input"]}>
                                <label htmlFor="username">Username:</label>
                                <input autoComplete="nope" placeholder="Introduza o seu username" value={username} id="username" type="text" onChange={e => setUsername(e.target.value)}></input>
                            </div>
                            <div className={styles["login-input"]}>
                                <label htmlFor="password">Password:</label>
                                <input placeholder="Introduza a sua password" value={password} id="password" type="password" onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        </div>

                        <div className={styles["login-form-buttons"]}>
                            <button type="button" onClick={login}>Login</button>
                            <button type="button"><Link href="register">Registar</Link></button>
                            <button style={{ marginTop: "5px" }} type="button"><Link href="https://facebook.com"><FaFacebook /></Link></button>
                            <button style={{ marginTop: "5px" }} type="button"><Link href="https://google.com"><FaGoogle /></Link></button>
                        </div>
                    </div>
                }
            </div>
        </div>
        </div>
    )
}



export default Login