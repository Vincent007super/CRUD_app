"use client";
export default function Form() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
                <h1 className="text-4xl font-bold">Signup Page</h1>
                <form className="mt-4" onSubmit={(e) => { e.preventDefault(); /* Handle signup logic here */ }}>
                    <button type="submit" className="bg-white text-black font-bold px-6 py-3 rounded-lg mt-4 hover:bg-gray-300">Sign Up</button>
                </form>
            </div>
    )
}