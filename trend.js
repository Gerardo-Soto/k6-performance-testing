import http from "k6/http";
import { Trend } from "k6/metrics";

export const options = {
    vus: 10,
    duration: '20s'
}

const trendUsers = new Trend("_users_duration_time_trend");
const trendCategories = new Trend("_categories_duration_time_trend");

export default function(){
    let requestUsers = http.get('https://api.escuelajs.co/api/v1/users/');
    trendUsers.add(requestUsers.timings.duration);

    let requestCategories = http.get('https://api.escuelajs.co/api/v1/categories/');
    trendCategories.add(requestCategories.timings.duration);
};

