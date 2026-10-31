# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type Todo {
  id: Int!
  description: String!
  done: Boolean!
}

type Query {
  """Message for describing the purpose of this function"""
  getRename: String!
  randomNumber: Float!

  """get a random number from 0 to 10"""
  randomFromZero(to: Int): Int!
  todo: [Todo!]!
}