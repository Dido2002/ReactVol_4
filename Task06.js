import React, {useState, useEffect} from "react";
import axios from 'axios';
import { ButtonToolbar } from "react-bootstrap";

export default function Task06(){

    const [title, setTitle] = useState('');

    function saveTodo(){
        const todo = {
            completed: false,
            title: title
        }
        axios.post('https://jsonplaceholder.typicode.com/todos', todo)
        .then(response =>{
            setTitle('');
            alert('Success!')
        })
    }

    return(

        // 'https://jsonplaceholder.typicode.com/todos'
        <div>
            <div>
                <label>Title</label>
                <input 
                    type="text"
                    value={title}
                    onInput={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <button onClick={saveTodo}>Save</button>
            </div>
        </div>
    )
}