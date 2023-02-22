//import { sleep } from "k6";
import http from "k6/http";

export const options = {
    stages: [
        {
            duration: '30s',
            target: 10
        },
        {
            duration: '10s',
            target: 500
        },
        {
            duration: '30s',
            target: 20
        },
    ],
    ext: {
        loadimpact: {
            distribution: {
                distributionLabel1: {
                    loadZone: 'amazon:us:ashburn'
                },
                distributionLabel2: {
                    loadZone: 'amazon:ie:dublin'
                }
            },
            // Test runs with the same name groups test runs together
            name: "2nd Test Cloud - Spike",
            projectID: 3627953,
            staticIP: true,
        },
    },
};

export default function () {
    let response = http.get('https://api.escuelajs.co/api/v1/categories');

    //sleep(1);// sleep 1 second
};

