"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href='/about'>About</Link>
      <br></br>
      <br></br>
      <Link href='/login'>Login</Link>
      <br></br>
      <br></br>
      <button onClick={()=>route.push('/login')}>Login</button>
    </div>
  );
}
