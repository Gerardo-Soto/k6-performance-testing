import { sleep } from "k6";
import http from "k6/http";

export const options = {
    stages: [
        {
            duration: '60s',
            target: 10
        },
        {
            duration: '180s',
            target: 10
        },
        {
            duration: '60s',
            target: 0
        }
    ]
};

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    sleep(1);// sleep 1 second
};

