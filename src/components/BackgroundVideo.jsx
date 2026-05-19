'use client';

import { useEffect, useRef, useState } from 'react';
import './BackgroundVideo.css';

export default function BackgroundVideo() {
    const videoRef = useRef(null);
    const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        // Check if desktop (min-width: 1024px) and user prefers motion
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        setShouldPlayVideo(isDesktop && !prefersReducedMotion);

        // Handle window resize
        const handleResize = () => {
            const nowDesktop = window.matchMedia('(min-width: 1024px)').matches;
            const nowPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            setShouldPlayVideo(nowDesktop && !nowPrefersReducedMotion);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (shouldPlayVideo && videoRef.current && !videoError) {
            // Attempt to play the video
            const playPromise = videoRef.current.play();

            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.warn('Video autoplay failed:', error);
                    // Autoplay was prevented, but don't show error - just show poster
                });
            }
        }
    }, [shouldPlayVideo, videoError]);

    const handleVideoError = () => {
        console.warn('Video failed to load, showing poster fallback');
        setVideoError(true);
    };

    return (
        <div className="hero-video-container">
            {shouldPlayVideo && !videoError ? (
                <>
                    <video
                        ref={videoRef}
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster="/hero-poster.jpg"
                        onError={handleVideoError}
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-video-overlay" />
                </>
            ) : null}
        </div>
    );
}
