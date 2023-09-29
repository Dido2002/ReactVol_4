import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



export default function Task01(){

    const MySwal = withReactContent(Swal);

    return(
        <div className="App">
            <button onClick={()=> {
                MySwal.fire({
                    title: <p>Hello World</p>,
                    html: <div>This is under heading</div>, 
                    icon :'success'
                })
            }}>Alert

            </button>
        </div>
    );
}