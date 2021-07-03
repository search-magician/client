import axios from 'axios';

const search = async (searchText) => {
    const response = await axios.get("http://localhost:5000/search", {params: {'q': searchText}})
    const idsList = []
    response.data.forEach(video => {
        idsList.push(video['id']);
    });
    // let response = ['3FH7pqTP4tY', '1PSIdXMMn7I', 'wwbM63-LFD4', 'rZjciV-pff0', 'GVHighLm3os']
    return idsList
}
export default search