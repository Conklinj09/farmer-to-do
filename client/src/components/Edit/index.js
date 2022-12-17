import { from, useMutation } from "@apollo/client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';


// import './Todo.css';

import moment from 'moment'
import { TodoContext } from "../../TodoContext";
import { QUERY_ME } from "../../utils/queries";

function Edit(){
    const [todoState,setTodoState]=useState({
        title:'',
        detail:'',
        date:''
        
})
   
    const {id} = useParams();
    const { loading, error, data } = useQuery(QUERY_ME);
	if (loading) return <p>Loading.........</p>
	if (error) return <h2>{error.message}</h2>
    const todos = data?.me || [];
    
    const todo = todos.todos.filter(todo => {
        return todo._id === id
        
    })
    
    

return (
    <form className="form" >
        <div className="mb-3 form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder={todo[0].title} value={todoState.title}onChange={e =>setTodoState({...todo,title:e.target.value})}/>

        </div>
        <div className="mb-3">
            <label>Details</label>
            <input type="text" className="form-control" placeholder={todo[0].detail} value={todoState.detail } onChange={e =>setTodoState({...todo,detail:e.target.value})}/>
        </div>
        <div className="mb-3">
            <label>Date</label>
            <input className="form-control" placeholder={moment(todo[0].date).format("YYYY-MM-DD")} value={todoState.date}  onChange={e =>setTodoState({...todo,date:e.target.value})} />
        </div>
        <button type="submit" className="btn btn-success">Update</button>
    </form>
)
}

export default Edit