import React from 'react'
import moment from 'moment'
import { GET_TODOS } from '../../utils/queries';
import AddTodos from '../../components/Todo/AddTodos';

const Todo = ({title,date,detail}) => {
    return(
        <a href="#" className="list-group-item list-group-item-action " aria-current="true">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{title}</h5>
						<small>{moment(date).format("MMMM DD YYYY")}</small>
					</div>
					<p className="mb-1">{detail}</p>
					<small><i class="fa-solid fa-trash-can"></i></small>
				</a>

    )
}

export default Todo