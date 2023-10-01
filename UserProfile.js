import React,{useContext} from "react";
import MyContext from "./context/MyContext";
export default function UserProfile(){
    
    const context = useContext(MyContext);

    return(
        <div>   
            <div>Username:{context.user.name}</div>
            <div>Username:{context.user.email}</div>
        </div>
    )
}