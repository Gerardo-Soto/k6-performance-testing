import { check } from "k6";
import http from "k6/http";

const TIMINGS_DURATION = 500;

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        // 1st threshold: evaluate at final
        http_req_failed: ["rate<.10"],
        // 2nd threshold: evaluate at 10 seconds if fail
        http_req_duration: [{
            threshold: `p(95)<${TIMINGS_DURATION}`,
            abortOnFail: true,
            delayAbortEval: "10s",// after 10s started, if there's a fail, abort.
        }],
    },
    ext: {
        loadimpact: {
            projectID: 3627953,
            // Test runs with the same name groups test runs together
            name: "1st Test Cloud"
        },
    },
};

export default function () {
    const PRODUCT_NOT_FOUND = 0;
    const PRODUCT_RANDOM = parseInt(Math.random()*100) + 10 + PRODUCT_NOT_FOUND;
    
    const RESPONSE = http.get(`https://api.escuelajs.co/api/v1/products/${PRODUCT_RANDOM}`);
    if (RESPONSE.status !== 200) {
        console.log(`https://api.escuelajs.co/api/v1/products/${PRODUCT_RANDOM}`);
    }

    check(RESPONSE, {
        "statusCode is 200": (r) => r.status === 200 ,
        "transaction is below 500mx ": (r) => r.timings.duration < TIMINGS_DURATION,
    });
};

