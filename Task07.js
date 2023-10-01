import React, {useState, useEffect} from "react";

import axios from 'axios';

export default function Task07(){

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetchTodos();
    }, []);

    function fetchTodos(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => setTodos(response.data))
    }

    function deleteTodo(id){
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                const index = todos.findIndex(todo => todo.id == id);
                const tmpTodos = [...todos];
                tmpTodos.splice(index, 1);
                setTodos(tmpTodos);
            })
    }

    return(
        <div className="Task07">
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title} 
                <button onClick={() => {deleteTodo(todo.id)}}>Delete</button></li>)}
            </ul>
        </div>
    );
}