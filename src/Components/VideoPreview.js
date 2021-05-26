import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

const styles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2em',
    marginBottom: '2em',
    textAlign: 'center',
};

const VideoPreview = (props) => {
    const [url, setURL] = useState("")
    useEffect(() => {
        let temp = 'https://www.youtube.com/watch?v='
        temp += props.videoId
        if (props.start) {
            let mid = props.start.search(":")
            let minutes = props.start.substring(0, mid)
            let seconds = props.start.substring(mid + 1)
            temp += "?start=" + minutes + "m" + seconds + "s" + "&end="
            mid = props.end.search(":")
            minutes = props.end.substring(0, mid)
            seconds = props.end.substring(mid + 1)
            temp += minutes + "m" + seconds + "s"
        }
        setURL(temp)
    });
    return <div style={styles}>
        {props.start ?
            <h3 styles="text-align: center;">Start: {props.start}, End: {props.end} </h3>
            : <></>
        }
        <ReactPlayer controls={true} style={styles} url={url} />
    </div>

};

export default VideoPreview