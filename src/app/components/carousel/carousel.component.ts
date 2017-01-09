import { Component,OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
  
})
export class CarouselComponent implements OnInit {

  
  @Input() picFileName:string ='';
  public myInterval:number = 3000;
  public noWrapSlides:boolean = false;
  public slides:any[] = [];
  public activeSlideIndex: number;
  public constructor() {
    
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
  public addSlide():void {
     console.log(this.picFileName);
    let newWidth = 'pic' + this.slides.length;
    this.slides.push({
      image: `./assets/slids/${newWidth}.png`
    });
  }
 ngOnInit() {}
}
