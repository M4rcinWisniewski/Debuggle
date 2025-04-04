import data from "./data.json"
export default function Dialog({message}) {

    return (
        <main className="bg-[#282828] rounded-2xl w-[25vw] h-[10vw] flex flex-col justify-center items-center gap-10 text-center p-5">
            <h1 className="text-xl ">{data.title}</h1>
            <p>{message}</p>
        </main>
    )
}