import { check } from "k6";
import http from "k6/http";

const TIMINGS_DURATION = 2000;

export const options = {
    vus: 10,
    duration: '20s',
    thresholds: {
        http_req_failed: ["rate<0.1"],
        http_req_duration: [{
            threshold: `p(95)<${TIMINGS_DURATION}`,
            abortOnFail: true,
            delayAbortEval: "10s",// after 10s started, if there's a fail, abort.
        }],// 95% request < 200ms
    }
};

export default function () {
    const response = http.get(`https://api.escuelajs.co/api/v1/products/6`);

    check(response, {
        "statusCode is 200": (r) => r.status === 200,
        "transaction time ": (r) => r.timings.duration < TIMINGS_DURATION,
    });
};

