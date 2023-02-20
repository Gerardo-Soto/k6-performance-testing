import http from"k6/http";
import { Counter, Trend } from"k6/metrics";

export const options = {
    vus: 10,
    duration: '20s'
}

const categoriesCounter = new Counter("_categories_counter");
const categoriesTrend = new Trend("_categories_trend")

const productsCounter = new Counter("_products_counter");
const productsTrend = new Trend("_products_Trend");

const usersCounter = new Counter("_users_counter");
const usersTrend = new Trend("_users_trend");

export default function(){
    let randomRequest = parseInt(Math.random()*3); 
    if (randomRequest === 0){
        let requestCategories = http.get('https://api.escuelajs.co/api/v1/categories');
        categoriesCounter.add(1);
        categoriesTrend.add(requestCategories.timings.duration);
    } else if (randomRequest === 1) {
        let requestProducts = http.get('https://api.escuelajs.co/api/v1/products');
        productsCounter.add(1);
        productsTrend.add(requestProducts.timings.duration);
    } else {
        let requestUsers = http.get('https://api.escuelajs.co/api/v1/users');
        usersCounter.add(1);
        usersTrend.add(requestUsers.timings.duration);
    };
};