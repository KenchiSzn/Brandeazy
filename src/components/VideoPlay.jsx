const VideoPlay = () => {
  return (
    <div className="hero__video">
      <video
        src={new URL("../assets/12942902_1920_1080_30fps.mp4", import.meta.url).href}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPlay;