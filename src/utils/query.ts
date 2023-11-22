

const MyQuery = ({
    page = 1,
    pageSize = 20,
}) => {
    let query = new Object()
    query["page"] = page
    query["pageSize"] = pageSize
    return query
}

export default MyQuery