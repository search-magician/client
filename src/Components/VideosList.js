import React, {useState} from 'react'
import VideoPreview from './VideoPreview'
const videosList = (props) => {
    return <div>
        {props.videos.map(function(video, index) {
            return <VideoPreview videoId={video}/>
        })}
    </div>
}

export default videosList