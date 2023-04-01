import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:MovieApiServiceService){
  }
  bannerResult:any[] = []
  trendingMovieResult:any[] = []
  actionMovieResult:any[] = []
  comedyMovieResult:any[] = []
  horrorMovieResult:any[] = []
  romanticMovieResult:any[] = []
  documentaryMovieResult:any[] = []
  ngOnInit(): void {
      this.bannerData()
      this.trendingData()
      this.actionData()
      this.comedyData()
      this.horrorData()
      this.romanceData()
      this.documentryData()
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      this.bannerResult = result.results;      
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      this.trendingMovieResult = result.results;
    })
  }

  actionData(){
    this.service.actionMovieApiData().subscribe((result)=>{
      this.actionMovieResult = result.results;
    })
  }
  comedyData(){
    this.service.comedyMovieApiData().subscribe((result)=>{
      this.comedyMovieResult = result.results;
    })
  }

  horrorData(){
    this.service.horrorMovieApiData().subscribe((result)=>{
      this.horrorMovieResult = result.results;
    })
  }
  
  romanceData(){
    this.service.romanceMovieApiData().subscribe((result)=>{
      this.romanticMovieResult = result.results;
    })
  }

  documentryData(){
    this.service.documentaryApiData().subscribe((result)=>{
      this.documentaryMovieResult = result.results;
    })
  }

}
