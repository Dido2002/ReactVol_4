import React,{useState} from 'react';
import MyContext from './context/MyContext';
import UserProfile from './UserProfile';
import UserSettings from './userSettings';
export default function Task08(){

    const [user,setUser] = useState({name: '123', email: '12313'});

    return(
        <div className="Task08">
            <MyContext.Provider value={{user: user, setUser: setUser}}>
                <UserProfile/>
                <UserSettings/>
            </MyContext.Provider>
        </div>
    )
}