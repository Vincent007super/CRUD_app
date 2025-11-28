import Header from "@/components/Header"

export default function Home() {
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
        <div className="w-screen bg-black h-[1600px] z-5 relative mt-[-200px] flex flex-col gap-6 justify-center">
          <div className="w-8/12 flex h-6/20">

          </div>
          <div className="w-8/12 flex h-6/20">

          </div>
          <div className="w-8/12 flex h-6/20">

          </div>
        </div>
      </main>
    </>
  );
}
