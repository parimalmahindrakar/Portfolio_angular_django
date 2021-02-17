import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly url = "https://mparimal.pythonanywhere.com/"
  // readonly url = "http://127.0.0.1:8000/"
  readonly myPortfolioLink ="https://firebasestorage.googleapis.com/v0/b/mparimal-a7cdb.appspot.com/o/PARIMAL_MAHINDRAKAR_RESUME.pdf?alt=media&token=4ebfb6f6-38bc-4cd3-824d-31912ec18ed6"
  constructor(private http: HttpClient) { }
  addReview(val:any) {
    return this.http.post(this.url,val)
  }
}
