import { sleep } from "k6";
import http from "k6/http";

export const options = {
    stages: [
        { duration: '2m', target: 100 },
        { duration: '3m', target: 150 },
        { duration: '2m', target: 200 },
        { duration: '2m', target: 200 }
    ]
};
options.stages.length

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    sleep(1);// sleep 1 second
};

