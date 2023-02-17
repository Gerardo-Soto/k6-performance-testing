//import { sleep } from "k6";
import http from "k6/http";

export const options = {
    stages: [
        { duration: '2m', target: 10 },
        { duration: '3h', target: 300 },
        { duration: '2m', target: 10 },
    ]
};

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    //sleep(1);// sleep 1 second
};

