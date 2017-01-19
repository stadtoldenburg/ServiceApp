import {Injectable}      from '@angular/core';

@Injectable()
export class addresShared {
  parkhausname:string;

  setAddres(parkhausname) {
    this.parkhausname = parkhausname;
    console.log(parkhausname);
  }
}


// export class MySharedService {
//   data: any;
//   dataChange: Observable<any>;

//   constructor() {
//     this.dataChange = new Observable((observer:Observer) {
//       this.dataChangeObserver = observer;
//     });
//   }

//   setData(data:any) {
//     this.data = data;
//     this.dataChangeObserver.next(this.data);
//   }
// }

// @Component({
//   (...)
// })
// export class MyComponent {
//   constructor(private service:MySharedService) {
//   }

//   setData() {
//     this.service.setData({ attr: 'some value' });
//   }
// }

// @Component({
//   (...)
// })
// export class MyComponent {
//   constructor(private service:MySharedService) {
//     this.service.dataChange.subscribe((data) => {
//       this.data = data;
//     });
//   }
// }