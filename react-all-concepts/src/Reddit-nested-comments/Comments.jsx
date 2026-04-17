import CommentsBox from "./CommentsBox";

const data = [
  {
    username: "tanu",
    comments: "hu",
    replies: [
      {
        username: "Pinky",
        comments: "how are you",
        replies: [
          {
            username: "Pinky",
            comments: "how are you",
            replies: [
              {
                username: "Pinky",
                comments: "how are you",
                replies: [{ username: "Pinky", comments: "how are you" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "tanu",
    comments: "hu",
    replies: [
      {
        username: "abc",
        comments: "hello",
        replies: [
          {
            username: "Pinky",
            comments: "how are you",
            replies: [
              {
                username: "Pinky",
                comments: "how are you",
                replies: [
                  {
                    username: "Pinky",
                    comments: "how are you",
                    replies: [{ username: "Pinky", comments: "how are you" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "tanu",
    comments: "hu",
    replies: [
      {
        username: "abc",
        comments: "hello",
        replies: [{ username: "Pinky", comments: "how are you" }],
      },
    ],
  },
  {
    username: "tanu",
    comments: "hu",
    replies: [
      {
        username: "abc",
        comments: "hello",
        replies: [
          {
            username: "Pinky",
            comments: "how are you",
            replies: [
              {
                username: "Pinky",
                comments: "how are you",
                replies: [
                  {
                    username: "Pinky",
                    comments: "how are you",
                    replies: [{ username: "Pinky", comments: "how are you" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function Comments() {
  return <CommentsBox data={data}/>
}

export default Comments;
