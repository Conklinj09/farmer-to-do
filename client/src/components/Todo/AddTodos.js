import { useMutation } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { ADD_TODO } from "../../utils/mutations";
import { GET_TODOS } from "../../utils/queries";
import moment from 'moment'


const AddTodos = () => {
    const inputAreaRef = useRef();
    const [todo, setTodo] = useState({
        title:'',
        detail:'',
        date:''
    })
    useEffect(() =>{
        const checkIfClickedOutside = e =>{
            if(!inputAreaRef.current.contains(e.target)){
                console.log("Click Inside the text area only")
            } 
            else{
                console.log("inside area")
            }
        }
        document.addEventListener('mousedown',checkIfClickedOutside)
        return() =>{
            document.removeEventListener("mousedown",checkIfClickedOutside);
        }
    })

    const [addTodo] = useMutation(ADD_TODO)
    const onSubmit = event => {
        event.preventDefault();
        addTodo({
            variables:{
                title:todo.title,
                detail:todo.detail,
                date:todo.date,
            },
            refetchQueries:[
                {
                    query: GET_TODOS
                }
            ]
        })
    }

    return (
        <form onSubmit={onSubmit} ref={inputAreaRef}>
            <div className="mb-3 form-group">
                <label>Title</label>
                {/* <pre>{JSON.stringify(todo,null,'\t')}</pre> */}
                <input type="text" className="form-control" placeholder="Enter the Title" value={todo.titile} onChange={e =>setTodo({...todo,title:e.target.value})}/>

            </div>
            <div className="mb-3">
                <label>Details</label>
                <input type="text" className="form-control" placeholder="Describe The Detail" value={todo.detail} onChange={e =>setTodo({...todo,detail:e.target.value})} />
            </div>
            <div className="mb-3">
                <label>Date</label>
                <input type="date" placeholder="mm/dd/yyyy" className="form-control" value={moment(todo.date).format("YYYY-MM-DD")} onChange={e =>setTodo({...todo,date:e.target.value})}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddTodos;