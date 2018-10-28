import { Injectable } from '@angular/core';
import { contentHeaders, baseUrl } from '../app/config/config';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(public http: HttpClient) {
    }

    login(username, password) {
        const headers: HttpHeaders = new HttpHeaders().set('email', username).set('password', password);
        console.log(headers, 'sdsdsdsdsdsds');
        return this.http.get(`${baseUrl}/auth`, { headers: headers });
    }
    signup(email, password) {
        // const headers: HttpHeaders = new HttpHeaders().set('email', username).set('password', password);
        //  console.log(headers, 'sdsdsdsdsdsds');
        return this.http.post(`${baseUrl}/auth`, { email: email, password: password });
    }

}
