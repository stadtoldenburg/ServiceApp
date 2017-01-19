import {Injectable}      from '@angular/core';

@Injectable()
export class addresShared {
  parkhausname:string;

  setAddres(parkhausname) {
    this.parkhausname = parkhausname;
    console.log(parkhausname);
  }
}