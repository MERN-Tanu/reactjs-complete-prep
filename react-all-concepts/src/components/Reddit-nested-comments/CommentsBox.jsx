function CommentsBox({ data }) {
  return (
    <div>
      {data.map((comments, index) => {
        return (
          <div key={index} className="pl-10 border-l-2 border-black">
            <div className="flex">
              {" "}
              <img
                src="https://i.redd.it/snoovatar/avatars/d345a6d9-e064-482f-a86e-e04780c4ac8f.png"
                alt="image"
              />
            </div>

            <div>
              {" "}
              <div className="font-bold px-2 py-4">{comments.username}</div>
              <div className="px-2">{comments.comments}</div>
            </div>
            <div>
              {comments?.replies && <CommentsBox data={comments.replies} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsBox;
