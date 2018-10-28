import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');


const apiBaseUrl = [
    "http://localhost:4000/api",
    "https://api.insharehub.com/api"
];

export const baseUrl = apiBaseUrl[0];
