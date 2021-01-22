import axios from 'axios';

function Asignin(data) {
    console.log("data", data);
    const APIurl = "http://localhost:8080/signup"
    axios.post(APIurl,data)
        .then((response) => {
            console.log(response);
            return response;
        }, (error) => {
            console.log(error);
        });
}


export {
    Asignin
}