import React, {useState} from 'react';
import SearchBar from './SearchBar'
import VideosList from './VideosList'
import search from '../Actions/search'
const Search1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("")
  const handleEnter = async () => { 
    setIsLoading(true)
    const v = await search(searchText)
    setVideos(v)
    setIsLoading(false)
  }
  const handleKeyPress = (text) => {
    setSearchText(text)
  }
    return (<div style={{marginTop:'65px'}}>
      <SearchBar ph={"Search Query"} handleKeyPress={handleKeyPress} handleEnter={handleEnter}/>
      {isLoading ? <p>Loading Results...</p> :
        <VideosList videos={videos}/>}
    </div>);
  }

export default Search1