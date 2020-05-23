import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';


@Injectable() 
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private userService: UserService
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.userService.getCurrentUser();
        let token =this.userService.getJWToken();
        console.log("Interceptor: " + JSON.stringify(currentUser) + " " + token);

        if (currentUser && token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(`Bearer ${token}`);
        } 

        return next.handle(request);
    }
}