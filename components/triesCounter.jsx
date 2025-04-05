
export default function triesCounter({color}) {
    const colors = {
        1: 'bg-red-500',
        2: 'bg-green-500',
      };
    return(
        <main className={`w-[1vw] h-[1vw] rounded-full ${colors[color] || 'bg-gray-500'}`} />
    )
}