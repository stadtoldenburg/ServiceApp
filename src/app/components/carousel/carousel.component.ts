import { Component,OnInit,Input, ApplicationRef, enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']

})
export class CarouselComponent implements OnInit {

  public picFileName:String;
  public myInterval:number = 3000;
  public noWrapSlides:boolean = false;
  public slides:any[] = [];
  public activeSlideIndex: number;
  public constructor() {}

  public makeCarousel() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
  public addSlide(): void {
    let newWidth = this.slides.length + 1;
    this.slides.push({
      image: `./assets/slids/${this.picFileName}/pic${newWidth}.png`
    });
  }
public removeSlide(){
  const slidesLength = this.slides.length;
  const _Zero = 0;
    for (let i = 0; i < slidesLength; i++) {
      this.slides.splice(_Zero, 1);
    }
  }

ngOnDestroy() {
  this.removeSlide();
}

 ngOnInit() {}
 
 public carouselFromParkingtable(name){
    this.removeSlide();
    this.picFileName = name;
   if(this.picFileName === undefined){
     this.picFileName = 'City';
   }
    this.makeCarousel();
  }
}
