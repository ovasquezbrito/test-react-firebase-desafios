import {
  GETPOSTS,
  CREATEPOST,
  UPDATEPOST,
  DELETEPOST,
  LIKEPOST,
} from "../constactions/typesActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case GETPOSTS:
      return action.payload;
    case CREATEPOST:
      return [...posts, action.payload];
    case UPDATEPOST:
      return posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case LIKEPOST:
      return posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case DELETEPOST:
      return posts.filter((post) => post.id !== action.payload);
    default:
      return posts;
  }
};
