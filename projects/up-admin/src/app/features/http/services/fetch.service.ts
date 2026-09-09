import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private http = inject(HttpClient);
  private base = 'http://localhost:5142/api/';

  get(url: string) {
    return this.http.get(`${this.base}${url}`, { withCredentials: true });
  }

  post<TRespose>(url: string, body?: unknown) {
    return this.http.post<TRespose>(`${this.base}${url}`, body, { withCredentials: true });
  }
}
