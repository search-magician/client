import React, { useState } from 'react';
import SearchBar from './SearchBar'
import VideosList from './VideosList'
import search2 from '../Actions/search2'
import VideoPreview from './VideoPreview';
const Search2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState({id: '', end: '', start: ''});
  const [searchText1, setSearchText1] = useState("")
  const [searchText2, setSearchText2] = useState("")
  const handleEnter = async () => {
    setIsLoading(true)
    const v = await search2(searchText1, searchText2)
    setVideos(v)
    console.log(v)
    setIsLoading(false)
  }
  const handleKeyPress1 = (text) => {
    setSearchText1(text)
  }
  const handleKeyPress2 = (text) => {
    setSearchText2(text)
  }
  return (<div style={{ marginTop: '65px' }}>
    <SearchBar ph="Video Link" handleKeyPress={handleKeyPress1} handleEnter={handleEnter} />
    <SearchBar ph="Search Query" handleKeyPress={handleKeyPress2} handleEnter={handleEnter} />
    {isLoading ? <p>Loading Results...</p> :
      <VideoPreview videoId={videos.id} end={videos.end} start={videos.start} />}
  </div>);
}

export default Search2