import React from 'react';
//const src = '/video/DIMA_IntroMovie.mp4';
export default function LandingVideo() {
    //console.log('DIMA_IntroMovie', DIMA_IntroMovie)

    return (
        <video
            style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                overflow: "hidden",
            }}
            controls={false}
            autoPlay
            muted
            loop
            playsInline
            src={'https://res.cloudinary.com/karolinauploads/video/upload/v1658137765/Dima/DIMA_IntroMovie.mp4'}
            poster={'/video/DIMA_IntroMovie_000.jpg'}
        >
            <source src={'/video/DIMA_IntroMovie.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
