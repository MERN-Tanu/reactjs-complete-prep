function ChatMessage({ name, photo, message }) {
  return (
    <div>
      <div className="flex m-4 p-4">
        {" "}
        <img
          src={photo}
          alt="photo"
          className="rounded-full w-7 h-7 object-cover "
        />
        <h3 className="text-md bold">{name}</h3>
      </div>

      <div>
        {" "}
        <p>{message}</p>
      </div>
    </div>
  );
}
export default ChatMessage;
