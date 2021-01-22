import axios from 'axios';

function Asignin(info) {
    console.log("info", info);
    const APIurl = "http://localhost:8080/signin"
    axios.post(APIurl,info)
        .then((response) => {
            const status = response.status
            const data = response.data
            return {status,data}
        }, (error) => {
            console.log(error);
        });
}


export {
    Asignin
}