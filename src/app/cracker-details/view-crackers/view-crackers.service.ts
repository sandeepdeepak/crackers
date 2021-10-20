import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class CrackersService {
    APIURL = 'https://app-server.wati.io/api/v1/';
    bearer = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYTJjY2ZhOC03N2EwLTQwOGYtOTYzNy05ZjFkYTRlOWUyZTYiLCJ1bmlxdWVfbmFtZSI6InNhbmRlZXBkZWVwYWsxNzEyOTZAZ21haWwuY29tIiwibmFtZWlkIjoic2FuZGVlcGRlZXBhazE3MTI5NkBnbWFpbC5jb20iLCJlbWFpbCI6InNhbmRlZXBkZWVwYWsxNzEyOTZAZ21haWwuY29tIiwiYXV0aF90aW1lIjoiMTAvMjAvMjAyMSAwNjo1NzowOCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlRSSUFMIiwiZXhwIjoxNjM1Mzc5MjAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.2oyW5W7X4J40grtUXrEI3UX1sqO3Kt3o870sHoNY6_Q';

    constructor(private httpClient: HttpClient) { }

    sendOrderthroughWhatsApp(message: any, mobileNo: any): Observable<any> {
        const headers = new HttpHeaders()
            .set('accept', '*/*')
            .set('Authorization', this.bearer);
        return <Observable<any>>this.httpClient.post(this.APIURL + `sendSessionMessage/${mobileNo}?messageText=${message}`, null, { 'headers': headers });
    }
}