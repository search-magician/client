import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'

const styles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2em'
};

const VideoPreview = (props) => {
    const [url, setURL] = useState("")
    useEffect(() => {
        let temp = 'https://www.youtube.com/watch?v='
        temp += props.videoId
        setURL(temp)
      });
    return <ReactPlayer style={styles} url= {url}/>
};

export default VideoPreview