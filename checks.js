import { check } from "k6";
import http from "k6/http";

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_failed: ["rate<0.1"],
    }
};

export default function () {
    const response = http.get("https://api.escuelajs.co/api/v1/products/5");

    check(response, {
        "statusCode is 200": (r) => r.status === 200,
    });
};

