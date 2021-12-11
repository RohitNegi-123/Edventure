import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./signin.css";
import M from 'materialize-css'
const SignIn = () => {
    // const [name, Setname] = useState("");
    const [password, Setpassword] = useState("");
    const [email, Setemail] = useState("");
    const Loggedin = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
            // alert("Invalid email")
        }
        fetch("/signed-in", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email,
                password
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                    console.log("No");
                    M.toast({ html: "Error", classes: "#c62828 red darken-3" })

                }
                else {
                    // console.log(result);
                    console.log("Successful");
                    localStorage.setItem("bool2", "true")
                    M.toast({ html: "Login Sucessfull", classes: "#c62828 green darken-3" })

                    window.open("/", "_self")
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (

        <div>
            <div class="wrapper">
                <div class="greenbox" style={{ border: "1px solid white", borderRadius: "12px", marginTop: "13px", height: "531px", width: "48%", marginLeft: "150px", marginRight: "-17px" }}> </div>

                <div style={{ marginRight: "0px" }} class="card">

                    <input type="checkbox" id="card1" class="more" aria-hidden="true" />

                    <div class="content">

                        <div class="front" style={{ backgroundColor: "white" }}>
                            <div class="inner">
                                <h2 style={{ marginTop: "-155px", color: "grey", fontSize: "35px" }}>Ed-venture</h2>
                                <h4 style={{ marginTop: "82px", fontSize: "17px", color: "grey", marginBottom: "20px" }}> Welcome to edventure </h4>
                                <br />
                                <div style={{ "flexDirection": "column", marginTop: "-46px" }} class="rating">
                                    <input style={{ width: "300px", border: "1px solid grey", borderRadius: "28px", marginTop: "-36px", marginBottom: "20px" }} class="tab" type="email" placeholder="Email" value={email} onChange={(e) => Setemail(e.target.value)} required />
                                    <input style={{ width: "300px", border: "1px solid grey", borderRadius: "28px", marginBottom: "20px" }} class="tab" type="password" placeholder="Password" value={password} onChange={(e) => Setpassword(e.target.value)} required />
                                </div>
                                <label style={{ marginTop: "-100px", marginBottom: "185px" }} onClick={() => Loggedin()} class="button" aria-hidden="true">
                                    Log In
                                </label>
                                <div style={{ color: "lightgrey", marginTop: "-5px" }}>
                                    ------ or login with -----
                                </div>
                            </div>
                            <div style={{ marginTop: "-110px" }} class="inner nomp">

                                <label onClick={() => Loggedin()} class="button2 " aria-hidden="true">
                                    Twitter
                                </label>

                                <label style={{ marginTop: "-280px" }} onClick={() => Loggedin()} class="button2 nomps" aria-hidden="true">
                                    Google
                                </label>
                                <div style={{ marginTop: "-280px", marginLeft: "90px" }}>
                                    Don't have an account? <Link to="/sign-up" >SignUp</Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}
export default SignIn;




// Meeting : https://meet.google.com/aej-teit-unq?authuser=1