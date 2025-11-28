
export default function Home() {
  return (
    <>
      <main>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/65 to-black z-2">
        </div>
        <div className="relative w-full h-[820px]">
          <video autoPlay loop muted className="w-full h-[820px] absolute object-cover opacity-60 ">
            <source src= "/videos/waves.mp4" type="video/mp4" />
          </video>
        </div>
<h1 className="text-white font-bold z-3 absolute top-4/12 left-2/10 text-5xl"> Welcome to the <br /> Anti Procrastinator App (APA)</h1>
<h1 className="text-white font-bold z-3 absolute top-9/20 right-2/10 text-2xl"> What will you do today?</h1>
      </main>
    </>
  );
}
