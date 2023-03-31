import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import { apikey, baseurl } from './secretKey';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {
  
  constructor(private http:HttpClient) { }
  
  
  bannerApiData():Observable<any>{
    return this.http.get(`${baseurl}/trending/all/week?api_key=${apikey}&language=en-US`);
  }

  trendingMovieApiData():Observable<any>{
    return this.http.get(`${baseurl}/trending/movie/day?api_key=${apikey}&language=en-US`)
  }

}
