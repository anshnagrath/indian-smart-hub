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
    sendEmail(obj) {
        return this.http.post(`${baseUrl}/email`, obj).toPromise();
    }

}
