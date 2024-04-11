import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/context";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [usernamePassword, setUsernamePassword] = useState({
    username: "",
    password: "",
  })
  const userRef = useRef()

  const { setLoggedInUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  function handleChange(e: { target: { name: string; value: string | number; }; }){
    setUsernamePassword({...usernamePassword, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    // const validateLogin = await axios.post()

    // if (validateLogin) {
    //   setLoggedInUser(username)
    //   navigate("/")
    // }
    

    setLoggedInUser(usernamePassword.username);
    navigate("/");
  }

  useEffect(() => {
    userRef.current.focus()
  }, [])

  return (
    <div className="h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-w-md w-[50%] h-[500px] mx-auto mt-40 space-y-8 text-center border rounded-lg">
        <h1>Login Page</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col items-center mt-5 gap-5">
          <label htmlFor="username">Username</label>
          <input
            ref={userRef}
            type="text"
            name="username"
            value={usernamePassword.username}
            autoComplete="off"
            onChange={handleChange}
            // onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username..."
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={usernamePassword.password}
            onChange={handleChange}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
          />
          <button type="submit" className="bg-blue-300">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
