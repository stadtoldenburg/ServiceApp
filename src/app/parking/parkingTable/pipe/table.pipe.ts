import {Pipe,PipeTransform} from "@angular/core";



@Pipe({
  name: 'opencloseFilter',
  pure: false
})
export class OpenCloseFilter  implements PipeTransform{
   transform(status: string){
       if (status === 'Geschlossen') {
           return 'danger';
       }
   }
}


@Pipe({
  name: 'freiplatyeFilter',
  pure: false
})
export class FreiPlatyeFilter  implements PipeTransform{
   transform(status: any){
       if (status > 20) {
           return 'greene';
       }
       if (status >10 && status <= 20 ) {
           return 'orange';
       }
       if (status <= 10) {
           return 'red';
       }
   }
}


@Pipe({
  name: 'statusFilter',
  pure: false
})
export class statusFilter  implements PipeTransform{
   transform(status: string){
       if (status === 'Offen') {
           return 'greene';
       }else{
           return 'red';
       }
   }
}