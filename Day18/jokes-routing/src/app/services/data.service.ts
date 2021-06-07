import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Joke } from '../models/joke.model'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getJokeById(id: string): Promise<Joke> {
    //http return cold observable
    //get return observable-on each suscribe to him-send req to network
    return this.http.get<Joke>('http://localhost:3000/jokes/' + id).toPromise()
  }
  getJoke(keyword: string, index: number): Promise<Joke> {
    //http return cold observable
    //get return observable-on each suscribe to him-send req to network
    return this.http
      .get<Joke>(
        `http://localhost:3000/jokes?q=${keyword}&_start=${index}&_limit=${1}`,
      )
      .toPromise()
  }
}
