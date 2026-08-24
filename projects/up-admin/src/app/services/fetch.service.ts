import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private http = inject(HttpClient);
  private base = 'https://localhost:7139/api/';

  get(url: string) {
    return this.http.get(url);
  }

  post<TRespose>(url: string, body: unknown) {
    return this.http.post<TRespose>(`${this.base}${url}`, body);
  }
}
