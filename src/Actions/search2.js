import axios from 'axios';
const search2 = async (searchText1, searchText2) => { // url , query
    // let url = "https://www.googleapis.com/youtube/v3/videos"
    // let response = await fetch(url)
    let startIdx = searchText1.search("=")
    searchText1 = searchText1.substring(startIdx + 1)
    console.log(searchText1, searchText2)
    // const response = await axios.post("http://localhost:5000/search/interval-suggestion/" + searchText1, { 'query': searchText2 })
    // console.log(response.data)
    const ret = {
        id: searchText1,
        // start: response.data.Start,
        // end: response.data.End, 
        start: "1:11",
        end: "1:50",
    }
    return ret
}
export default search2