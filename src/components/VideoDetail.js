import React from 'react'

function VideoDetail({ video }) {
    if (!video){
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;


    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="Video Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
