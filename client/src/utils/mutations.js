import { gql } from '@apollo/client';
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
      _id
      email
      username
    }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($title:String,$detail:String,$date:Date){
    addTodo(title:$title,detail:$detail,date:$date){
     id
     title
     detail
     date
      
    }
  }
`

export const DELETE_TODO = gql`
  mutation deleteTodo($id:ID){
      deleteTodo(id:$id)
  }
`