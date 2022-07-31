import React from 'react'

function VideoItem({ video, onVideoSelect }) {
    return (
        <div onClick={()=>onVideoSelect(video)} className="item" style={{
            display: "flex !important",
            alignItems: 'center !important',
            cursor: 'pointer'
        }}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={{
                maxWidth: "180px"
            }} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>


            </div>
        </div>
    )
}

export default VideoItem
