import http from "k6/http";
import { Counter, Gauge } from "k6/metrics";

export const options = {
    vus: 10,
    duration: '20s'
}

const waitingTime = new Gauge("waiting and sending_time");

export default function(){
    let request = http.get('https://api.escuelajs.co/api/v1/categories');

    waitingTime.add(request.timings.waiting + request.timings.duration);
    //console.log(waitingTime.name);
};

