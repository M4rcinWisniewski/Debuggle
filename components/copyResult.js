import useLocalStorage from "@/hooks/useLocalStorage";
export default function CopyResult() {
    const {tries} = useLocalStorage()
    const date = new Date()
    const ifNumberLessThanTen = num => num < 10 ? `0${num}` : num
    const displayDate = `${date.getFullYear()}.${ifNumberLessThanTen(date.getMonth() + 1)}.${ifNumberLessThanTen(date.getDate())}`

    return `💻${displayDate}💻\n${"🟥".repeat(Math.max(0, tries - 1))}🟩 = ${tries}🔥🏆\n#Debuggle`

}

