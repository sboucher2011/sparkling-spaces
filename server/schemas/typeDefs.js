const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    reviews: [Review]
    friends: [User]
  }

  type Maid {
    _id: ID
    maid_username: String
    name: String
    friendCount: Int
    reviews: [Review]
    friends: [User]
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    maid_username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    maids: [Maid]
    user(username: String!): User
    maid(maid_username: String!): Maid
    reviews(username: String): [Review]
    review(_id: ID!): Review
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMaid(maid_username: String!, name: String!): Maid
    addReview(reviewText: String!, maid_username: String!): Review
    addReaction(reviewId: ID!, reactionBody: String!): Review
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
