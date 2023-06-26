import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private httpClient: HttpClient) {}

    loginById(userId: string, password: string) {
        return this.httpClient.get(`/loginById/${userId}?password=${password}`);
    }}

