
export default function triesCounter({variant}) {
    const colors = {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        yellow: 'bg-yellow-500',
        gray: 'bg-gray-500',
      };
    return(
        <main className={`w-[1vw] h-[1vw] rounded-full ${colors[variant] || 'bg-gray-500'}`} />
    )
}