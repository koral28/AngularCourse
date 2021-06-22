import { Injectable, resolveForwardRef } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { List } from '../models/list.model'
import { catchError, filter, map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly baseUrl: string = 'http://localhost:8800'
  constructor(private http: HttpClient) {}

  getLists(): Observable<List[]> {
    const url = `${this.baseUrl}/api/lists`

    return this.http.get<List[]>(url)
  }

  getNumberOfLists(): Promise<Number> {
    const url = `${this.baseUrl}/api/lists`

    return this.http
      .get<List[]>(url)
      .pipe(map((list) => list.length))
      .toPromise()
  }

  getItemsOfList(): Promise<string[][]> {
    const url = `${this.baseUrl}/api/lists`

    return this.http
      .get<List[]>(url)
      .pipe(map((list) => list.map((m) => m.Items)))
      .toPromise()
  }

  getNumberOfItems(): Promise<Number[]> {
    const url = `${this.baseUrl}/api/lists`

    return this.http
      .get<List[]>(url)
      .pipe(map((list) => list.map((m) => m.Items.length)))
      .toPromise()
  }

  addList(list: List): Observable<List> {
    const url = `${this.baseUrl}/api/lists`

    return this.http.post<List>(url, list, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    })
  }
}
