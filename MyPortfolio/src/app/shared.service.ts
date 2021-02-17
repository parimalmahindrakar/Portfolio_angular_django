import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // readonly url = "https://mparimal.pythonanywhere.com/"
  readonly url = "http://127.0.0.1:8000/"
  constructor(private http: HttpClient) { }
  addReview(val:any) {
    return this.http.post(this.url,val)
  }
}
