import React,{useState, useEffect} from "react";
import axios from 'axios';

export default function Task05(){

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetchDataAsync();
    }, []);


    function fetchData(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
            })
    }

    async function fetchDataAsync() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setTodos(response.data);
    }

    return(
        <div className="Task05">
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    )
}