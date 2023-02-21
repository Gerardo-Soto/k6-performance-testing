import { sleep } from "k6";
import http from "k6/http";

export const options = {
    stages: [
        { duration: '20s', target: 100 },
        { duration: '10s', target: 150 },
        { duration: '10s', target: 300 },
        { duration: '10s', target: 400 }
    ]
};
options.stages.length

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    //sleep(1);// sleep 1 second
};

