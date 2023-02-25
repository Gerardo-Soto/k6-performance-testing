//import { sleep } from "k6";
import http from "k6/http";

export const options = {
    stages: [
        { duration: '1m', target: 10 },
        { duration: '30s', target: 500},
        { duration: '3m', target: 500 },
        { duration: '30s', target: 20},
        { duration: '1m', target: 10 },
    ]
};

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    //sleep(1);// sleep 1 second
};

