import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class CrackersService {
    APIURL = 'https://app-server.wati.io/api/v1/';
    bearer = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNmEwNjZkYy1jNmVmLTQ4NWQtYmY0OS1iMzA4ZjY5NDE5ZWMiLCJ1bmlxdWVfbmFtZSI6InNhbmRlZXBkZWVwYWswMDFAZ21haWwuY29tIiwibmFtZWlkIjoic2FuZGVlcGRlZXBhazAwMUBnbWFpbC5jb20iLCJlbWFpbCI6InNhbmRlZXBkZWVwYWswMDFAZ21haWwuY29tIiwiYXV0aF90aW1lIjoiMTAvMDcvMjAyMSAxNzoyNToyMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlRSSUFMIiwiZXhwIjoxNjM0MjU2MDAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.YWdFcu6XkFH463jsJ-XadSf5jvm-LK4c8-InJR5xSYw';

    constructor(private httpClient: HttpClient) { }

    sendOrderthroughWhatsApp(message: any, mobileNo: any): Observable<any> {
        const headers = new HttpHeaders()
            .set('accept', '*/*')
            .set('Authorization', this.bearer);
        return <Observable<any>>this.httpClient.post(this.APIURL + `sendSessionMessage/${mobileNo}?messageText=${message}`, null, { 'headers': headers });
    }
}