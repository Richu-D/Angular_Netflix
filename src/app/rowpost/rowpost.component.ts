import { Component,Input,NgZone } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-rowpost',
  templateUrl: './rowpost.component.html',
  styleUrls: ['./rowpost.component.css']
})
export class RowpostComponent {
  @Input() Title:string = "";
  @Input() array:any[]=[];
  public trailerUrl: SafeResourceUrl="";
  constructor(private service:MovieApiServiceService,private sanitizer: DomSanitizer){}
  getTrailerId(id:number) {
    this.service.getMovieVideos(id).subscribe((data: any) => {
      const video = data.results.find((v: { type: string; }) => v.type === 'Trailer');
      if (video) {
        this.trailerUrl =this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.key}`)
      }
    });
  }


}
