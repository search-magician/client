const search2 = async (searchText1, searchText2) => {
    // let url = "https://www.googleapis.com/youtube/v3/videos"
    // let response = await fetch(url)
    let startIdx = searchText1.search("=")
    searchText1 = searchText1.substring(startIdx + 1)
    console.log(searchText1, searchText2)
    let response = ['3FH7pqTP4tY', '1PSIdXMMn7I', 'wwbM63-LFD4', 'rZjciV-pff0', 'GVHighLm3os']
    return response
}
export default search2