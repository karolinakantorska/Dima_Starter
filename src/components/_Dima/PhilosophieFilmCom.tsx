import React from 'react';
export default function PhilosophieFilmCom({ url }: { url: string }) {

    return (
        <video
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
            }}
            controls={false}
            autoPlay={true}
            muted
            loop={false}
            playsInline
            src={url}

        >
            <source src={'/video/DIMA_IntroMovie.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}