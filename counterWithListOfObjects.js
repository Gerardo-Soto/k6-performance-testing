import http from "k6/http";
import { Counter, Trend } from "k6/metrics";

export const options = {
    vus: 10,
    duration: '20s'
}

const entrypoint = [
    {
        url: 'https://api.escuelajs.co/api/v1/categories',
        counter: new Counter("_categories_counter"),
        trend: new Trend("_categories_trend"),
    },
    {
        url: 'https://api.escuelajs.co/api/v1/products',
        counter: new Counter("_products_counter"),
        trend: new Trend("_products_Trend"),
    },
    {
        url: 'https://api.escuelajs.co/api/v1/users',
        counter: new Counter("_users_counter"),
        trend: new Trend("_users_trend"),            
    },
];

export default function(){
    let randomRequest = parseInt(Math.random()*3);

    let request = http.get(entrypoint[randomRequest].url);
    entrypoint[randomRequest].counter.add(1);
    entrypoint[randomRequest].trend.add(request.timings.duration);
};

