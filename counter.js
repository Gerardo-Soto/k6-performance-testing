import http from "k6/http";
import { Counter } from "k6/metrics";

export const options = {
    vus: 10,
    duration: '20s'
}

const categoriesCounter = new Counter("called_products");
const productsCounter = new Counter("counter_products");
const usersCounter = new Counter("users_counter");

export default function(){
    let randomRequest = parseInt(Math.random()*3); 
    if (randomRequest === 0){
        let request = http.get('https://api.escuelajs.co/api/v1/categories');
        categoriesCounter.add(1);
    } else if (randomRequest === 1) {
        let products = http.get('https://api.escuelajs.co/api/v1/products');
        productsCounter.add(1);
    } else {
        let users = http.get('https://api.escuelajs.co/api/v1/users');
        usersCounter.add(1);
    };
};

