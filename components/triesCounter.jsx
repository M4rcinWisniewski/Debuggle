
export default function triesCounter({color}) {
    const colors = {
        1: 'bg-red-500',
        2: 'bg-green-500',
      };
    return(
        <main className={`md:w-[1vw] md:h-[1vw] w-[1.5vw] h-[1.5vw] rounded-full ${colors[color] || 'bg-gray-500'}`} />
    )
}