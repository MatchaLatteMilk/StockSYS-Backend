import axios from 'axios';

function Asignin(data) {
    console.log("data", data);
    const APIurl = "http://localhost:5000/signin"
    axios.post(APIurl,data)
        .then((response) => {
            console.log(response);
            return response;
        }, (error) => {
            console.log(error);
        });
}

function Check(data) {

}

export {
    Asignin,
    Check
}