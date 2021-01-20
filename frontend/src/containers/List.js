import React, {useState,useEffect} from 'react';
import "../styles/List.css";
import { GetUser } from "../services/Listuser.Service";


export default function Userlist() {
    const [users,getusers] = useState('');

    useEffect(() => {
        const data = GetUser()
        getusers(data)
    }, []);

    return(
        <>
            {users && users.length > 0 ? 
                users.map((user, index) => {
                    console.log(user);
                    return(
                        <li key={index}>Test</li>
                    )
                })
            : <h1>no list</h1>}
        </>
    )
}