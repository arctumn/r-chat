"use client"

import { FC, useEffect, useState } from "react"
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
        <div className={styles["login-page"]}>
            <h1>R-CHAT</h1>
            {loading && <Loading />}
            {!loading && error &&
                <div>
                    <p>Username ou Password Inválidos</p>
                </div>
            }
            {!loading &&
                <div>
                    <div>
                        <div className={styles["login-input"]}>
                            <label htmlFor="username">Username:</label>
                            <input placeholder="Introduza o seu username"value={username} id="username" type="text" onChange={e => setUsername(e.target.value)}></input>
                        </div>
                        <div className={styles["login-input"]}>
                            <label htmlFor="password">Password:</label>
                            <input placeholder="Introduza a sua password"value={password} id="password" type="password" onChange={e => setPassword(e.target.value)}></input>
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
    )
}



export default Login