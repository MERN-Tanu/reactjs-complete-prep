import ChatWindow from "./ChatWindow";
import VideoStream from "./VideoStream";

function LiveChat() {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow />
    </div>
  );
}

export default LiveChat;
