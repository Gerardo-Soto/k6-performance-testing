import { sleep } from "k6";
import http from "k6/http";

export const options = {
    vus: 1,
    duration: '20s'
};

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    sleep(1);// sleep 1 second
};

