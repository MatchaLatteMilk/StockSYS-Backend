import axios from 'axios';

const GetUser = () => {
    axios.get('http://localhost:5000/api/user/showall')
    .then((res) => {
        console.log(res)
        return res;
    })
    .catch((err) => {
        console.error(err)
    })
}

export {
    GetUser
};