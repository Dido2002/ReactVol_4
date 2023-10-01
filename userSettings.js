import React,{useContext} from "react";
import MyContext from "./context/MyContext";

export default function UserSettings(){
    const context = useContext(MyContext);
    return(
        <div>
            <div>
                Username:
                <input 
                    type="text"
                    onInput={e=>context.setUser({...context.user,name:e.target.value})}
                    value={context.user.name}
                />
            </div>
            <div>
                Email:
                <input 
                    type="text"
                    onInput={e=>context.setUser({...context.user,email:e.target.value})}
                    value={context.user.email}
                />
            </div>
        </div>
    )
}