
export default function CopyResult(numberOfTries) {
    const date = new Date()
    const ifNumberLessThanTen = num => num < 10 ? `0${num}` : num
    const displayDate = `${date.getFullYear()}.${ifNumberLessThanTen(date.getMonth() + 1)}.${ifNumberLessThanTen(date.getDate())}`

    return `💻 ${displayDate} 💻\n ${"🟥".repeat(numberOfTries - 1)}🟩 = ${numberOfTries}🔥\n Debugle`.split("\n")

}