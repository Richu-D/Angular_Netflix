import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import { apikey, baseurl } from './secretKey';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {
  
  constructor(private http:HttpClient) { }
  getMovieVideos(id: number): Observable<any> {
    return this.http.get(`${baseurl}/movie/${id}/videos?api_key=${apikey}&language=en-US`);
  }

  bannerApiData():Observable<any>{
    return this.http.get(`${baseurl}/trending/all/week?api_key=${apikey}&language=en-US`);
  }

  trendingMovieApiData():Observable<any>{
    return this.http.get(`${baseurl}/trending/movie/day?api_key=${apikey}&language=en-US`)
  }

  actionMovieApiData():Observable<any>{
    return this.http.get(`${baseurl}/discover/movie?api_key=${apikey}&with_genres=28`)
  }

  comedyMovieApiData():Observable<any>{
    return this.http.get(`${baseurl}/discover/movie?api_key=${apikey}&with_genres=35`)
  }

  horrorMovieApiData():Observable<any>{
    return this.http.get(`${baseurl}/discover/movie?api_key=${apikey}&with_genres=27`)
  }
  romanceMovieApiData():Observable<any>{
    return this.http.get(`${baseurl}/discover/movie?api_key=${apikey}&with_genres=10749`)
  }
  documentaryApiData():Observable<any>{
    return this.http.get(`${baseurl}/discover/movie?api_key=${apikey}&with_genres=99`)
  }

}
