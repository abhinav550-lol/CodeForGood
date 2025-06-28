import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (!res.ok) {
                alert(data.error || "Login failed")
                return
            }

            // Save token and role
            localStorage.setItem("token", data.token)
            localStorage.setItem("role", data.user.role)

            // Redirect based on role
            if (data.user.role === "admin") {
                navigate("/admin/dashboard")
            } else if (data.user.role === "volunteer") {
                navigate("/volunteer")
            } else {
                navigate("/user/profile")
            }
        } catch (err) {
            console.error("Login Error:", err)
            alert("Something went wrong")
        }
    }

    return (
        <div className="bg-[#FFF8F8] h-screen flex justify-center items-center">
            <div className="w-[30%] h-[60%] flex justify-center items-center flex-col gap-4 bg-gray-100 p-8 rounded-lg shadow-lg">
                <h1 className="text-black text-4xl font-bold">LOGIN</h1>
                <form className="flex justify-center items-center flex-col gap-4 w-full">
                    <input
                        type="email"
                        className="p-2 rounded w-full border border-gray-300"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="p-2 rounded w-full border border-gray-300"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-[#48A6A7] text-white rounded-lg px-4 py-2"
                        onClick={handleLogin}>Login
                    </button>
                    <p className="text-center">
                        Are you a Funder? <Link to="/funder" className="text-[#48A6A7]">Funder Login</Link>
                    </p>
                </form>
            </div>
            <Outlet />
        </div>
    )
}

export default Login
