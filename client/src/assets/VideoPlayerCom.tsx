import React from 'react';

const VideoPlayer = (props: any) => {


    const { videoSrc } = props

    return (
        <div className='flex justify-center mt-7' key={videoSrc}>
            <video style={{maxWidth:"24%"}} controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div >
    );
};

export default VideoPlayer;
