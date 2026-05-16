function VideoStream() {
  return (
    <div className="">
      <iframe
        width="800"
        height="600"
        src="https://www.youtube.com/embed/1oDrJba2PSs?si=2iRbzpXqFwIyh9FG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  );
}

export default VideoStream;
