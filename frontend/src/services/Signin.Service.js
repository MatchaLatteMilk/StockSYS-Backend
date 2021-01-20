import axios from 'axios';

export default function PostLogin (data) {
     // http://localhost:5000/signin?email="@mai"&password="13245"
     const response = axios.post("http://localhost:5000/signin", data)
     console.log("data", data);

     return response
}
 