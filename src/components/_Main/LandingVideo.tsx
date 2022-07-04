import React from 'react';

export default function LandingVideo() {
    //console.log('DIMA_IntroMovie', DIMA_IntroMovie)
    return (
        <video
            style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",

            }}
            controls={false}
            autoPlay
            muted
            loop
            src={'/video/DIMA_IntroMovie.mp4'}
        //poster={poster}
        >
            <source src={'/video/DIMA_IntroMovie.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
