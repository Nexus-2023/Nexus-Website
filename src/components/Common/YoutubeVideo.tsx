import React, { useState, useEffect } from "react"
import YouTube from "react-youtube"
import { ClipLoader } from "react-spinners"
const YouTubeFacade = ({ videoId }: { videoId: any }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the video container is within the viewport
      const videoContainer = document.getElementById("video")
      if (videoContainer) {
        if (videoContainer.getBoundingClientRect().top < window.innerHeight) {
          setIsLoaded(true)
          window.removeEventListener("scroll", handleScroll)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Optionally, handle component unmount to avoid memory leaks
    return () => window.removeEventListener("scroll", handleScroll)
  }, [videoId])

  if (!isLoaded) {
    return (
      <div className="video-placeholder w-full h-full flex justify-center items-center">
        <ClipLoader color="#45ABF1" />
      </div>
    )
  }

  const opts = {
    height: "auto",
    width: "auto",

    playerVars: {
      autoplay: 0,

      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowFullScreen: true,
    },
  }

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={() => console.log("YouTube video ready")}
      iframeClassName={`w-full aspect-video max-w-screen-md rounded-2xl  shadow-lg shadow-slate-700 opacity-100 absolute top-0 left-0 transition-opacity duration-500 ease-in-out `}
    />
  )
}

export default YouTubeFacade
