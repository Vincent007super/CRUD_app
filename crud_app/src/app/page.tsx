"use client";
import Header from "@/components/Header"
import { ProcStats } from "@/components/Charts";

export default function Home() {
  const handleSignup = () => {
    window.location.href = "/signup";
  }
  return (
    <>
      <Header />
      <main>
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-black/65 to-black z-2">
        </div>
        <div className="relative w-full h-[820px]">
          <video autoPlay loop muted className="w-full h-[820px] fixed object-cover opacity-60 ">
            <source src="/videos/waves.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="fixed w-screen z-3 top-4/12 flex-col justify-center gap-5 flex justify-center items-center">
          <h1 className="text-white font-bold z-3 text-5xl w-6/12"> Welcome to the <br /> Anti Procrastinator App (APA)</h1>
          <h1 className="text-white font-bold z-3 text-2xl text-right w-5/12"> What will you do today?</h1>
        </div>
        <div className="w-screen bg-black h-[1600px] z-5 relative mt-[20px] flex flex-col gap-6 justify-center items-center">
          <div className="w-8/12 flex h-6/20 flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-8xl">Hey, you!</h1>
            <h3 className="font-bold text-3xl">Are you tired of Procrastinating and feeling like you are worthless because you didn't do anything?</h3>
            <h1 className="font-bold text-6xl mt-12"> We are too, and we have a solution</h1>
          </div>
          <div className="w-8/12 flex h-6/20">
            <h3 className="font-bold text-2xl">But first, the numbers </h3>
            <div className="w-12" />
            <ProcStats />
          </div>
          <div className="w-8/12 flex h-6/20">
            <h3 className="font-bold text-2xl">Ok, so there is nothing we can do? Wrong!</h3>
            {/* Content on how to combat procrastination using APA */}
          </div>
          <div className="w-8/12 flex h-6/20 flex flex-col justify-center items-center gap-4">
            <h3 className="font-bold text-2xl">Ready to get started? Sign up now!</h3>
            <button className="bg-white text-black font-bold px-6 py-3 rounded-lg mt-4 hover:bg-gray-300" onClick={handleSignup}>Sign Up today!</button>
          </div>
        </div>

      </main>
    </>
  );
}
