import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-rowpost',
  templateUrl: './rowpost.component.html',
  styleUrls: ['./rowpost.component.css']
})
export class RowpostComponent {
  @Input() Title:string = "";
  @Input() array:any[]=[];
  
}
