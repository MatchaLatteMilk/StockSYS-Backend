import React, {useState,useEffect} from 'react';
import "../styles/List.css";
import Listuser from "../services/Listuser.Service";


export default function Userlist() {
    const [users,getusers] = useState('');

    componentDidMount(){
        
    }

    return(
        getusers.map((user, index) => {
            console.log(user);
            return(
                <li key={index}>Test</li>
            )
        })
    )
}