import http from "k6/http";
import { Rate } from "k6/metrics";

export const options = {
    vus: 10,
    duration: '20s'
}

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

