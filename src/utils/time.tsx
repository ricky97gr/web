const HandleTime = {
    MillTime2Date: function (milltime: number) {
        let date = new Date(milltime)

        return date.toLocaleString('zh', { hour12: false }).replaceAll("/", "-")
    },
    Data2MillTime: function (date) {
        return Date.now()
    }
}

export default HandleTime