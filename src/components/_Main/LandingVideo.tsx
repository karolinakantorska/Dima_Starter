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
            //src={'https://res.cloudinary.com/karolinauploads/video/upload/v1658137765/Dima/DIMA_IntroMovie.mp4'}
            src={'https://firebasestorage.googleapis.com/v0/b/archweb-c117f.appspot.com/o/film%2FDIMA_IntroMovie.mp4?alt=media&token=b5bcf8f2-6656-4453-acfb-71380c0a5667'}
        >
            <source src={'/video/DIMA_IntroMovie.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
