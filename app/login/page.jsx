"use client"

import { useRouter } from "next/navigation";

const Login = () => {
  const route = useRouter();
  return (
    <div>
      <h1>Login</h1>
      <br></br>
      <br></br>
      <button onClick={()=>route.push('/login/student')}>Student Login</button>
    </div>
  );
};
export default Login;
