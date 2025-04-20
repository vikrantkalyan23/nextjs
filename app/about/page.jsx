"use client"
import { useRouter } from "next/navigation";
const About = () => {
  const route = useRouter();
  const navigate = (url) => {
    route.push(url);
  }
  return (
    <div>
      <h2>About</h2>
      <button onClick={()=>navigate('/')}>Home</button>
    </div>
  );
};
export default About;
