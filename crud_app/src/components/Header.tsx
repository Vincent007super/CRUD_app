"use client";

export default function Header() {
    const handleHome = () => {
        window.location.href = "/";
    }
    return (
        <>
            <div onClick={handleHome} className="z-15 w-full flex justify-center items-center h-20 fixed top-0">
                <header className="w-250 h-15 bg-black z-15 flex relative justify-center items-center rounded-4xl translate-x-">
                    <h1 className="text-white font-bold text-2xl">Anti Procrastinator App (APA)</h1>
                    {/* Content here, eventually */}
                </header>
            </div>
        </>
    )
}