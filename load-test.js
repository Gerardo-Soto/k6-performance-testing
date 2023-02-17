//import { sleep } from "k6";
import http from "k6/http";

export const options = {
    stages: [
        { duration: '10s', target: 80 },
        { duration: '10s', target: 90 },
        { duration: '45s', target: 180 },
        { duration: '20s', target: 100 },
        { duration: '30s', target: 200 },
        { duration: '10s', target: 120 },
        { duration: '10s', target: 70 },
    ]
};

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    //sleep(1);// sleep 1 second
};

