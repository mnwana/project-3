import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postData: PostInput!) {
    addPost(postData: $postData) {
      _id
      title
      postText
      animalType
      condition
      category
      createdAt
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      postText
      createdAt
      username
      animalType
      condition
      category
      commentCount
      watchingCount
      watching {
        _id
      }
      comments {
        _id
        commentBody
        updatedAt
        createdAt
        userId
        replies {
          _id
          replyBody
          createdAt
          userId
        }
      }
    }
  }
`;


export const ADD_REPLY = gql`
  mutation addReply($commentId: ID!, $postId: ID!, $replyBody: String!) {
    addReply(commentId: $commentId, postId: $postId, replyBody: $replyBody) {
      _id
      postText
      createdAt
      username
      animalType
      condition
      category
      commentCount
      watchingCount
      watching{
        _id
      }
      comments {
        _id
        commentBody
        updatedAt
        createdAt
        userId
        replies {
          _id
          replyBody
          createdAt
          userId
        }
      }
    }
  }
`;
