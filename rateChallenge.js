import http from "k6/http";
import { Rate } from "k6/metrics";

export const options = {
    vus: 10,
    duration: '20s',
    thresholds: [{
        http_req_failed: ["rate<0.35"],// req_failded should be less than 35%
        abortOnFail: true,
        delayAbortEval: "10s",
    }],
};

const myRate = new Rate("_Rate_products");

export default function(){
    const randomID = parseInt(Math.random()*400);
    let request = http.get('https://api.escuelajs.co/api/v1/products/'+ randomID);
    
    if (request.status == 400 ) {
        myRate.add(0);
    } else {
        myRate.add(1);
    };
};
