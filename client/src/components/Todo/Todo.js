import React from 'react'
import moment from 'moment'
import { GET_TODOS } from '../../utils/queries';
import AddTodos from '../../components/Todo/AddTodos';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../../utils/mutations';
import './Todo.css';

const Todo = ({id,title,date,detail}) => {
    const [deleteTodo] = useMutation(DELETE_TODO);
    const removeTodo = (id) =>{
        deleteTodo({
            variables:{
                id:id
            },refetchQueries:[
                {query:GET_TODOS}
            ]
        })
    }
    return(
        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{title}</h5>
						<small>{moment(date).format("MMMM DD YYYY")}</small>
					</div>
					<p className="mb-1">{detail}</p>
					<small onClick={() => removeTodo(id)}
                    ><i class="fa-solid fa-trash-can"></i></small>
				</a>

    )
}

export default Todo