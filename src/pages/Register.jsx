import { useState } from "react";
import {registerUser} from "../utils/api"
export default function Register({handleRegister}){
    const [loading,setLoading]=useState(false);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setLoading(()=>true)
        const data=Object.fromEntries(new FormData(e.target));
        const response=await registerUser(data);
        console.log(response?.message);
        setLoading(()=>false)
    }

    return(
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
            <h2>Create account</h2>
            <p className="auth-subtitle">Register to continue to your dashboard.</p>

            <label htmlFor="name">Enter name</label>
            <input type="text" required name="name"  id="name" placeholder="Your name" />

            <label htmlFor="email">Enter Email</label>
            <input type="email" required name="email" id="email" placeholder="your@mail.com" />

            <label htmlFor="password">Enter Password</label>
            <input type="password" required id="password" name="password" placeholder="Create a password" />

            <button type="submit" disabled={loading} className="primary-button">
                {loading?"Loading":"Register"}
            </button>
            <button type="button" className="secondary-button" onClick={handleRegister}>Return To Login Page</button>
            </form>
        </div>
    )
}
