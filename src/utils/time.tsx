

export const MillTime2Date = (milltime: number) => {
    let date = new Date(milltime)

    return date.toLocaleString('zh', { hour12: false }).replaceAll("/", "-")
}

export const Data2MillTime = () => {
    return Date.now()
}
