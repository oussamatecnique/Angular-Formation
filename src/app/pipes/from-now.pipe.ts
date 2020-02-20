import { Pipe, PipeTransform } from '@angular/core';
import {} from 'date-fns'
@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}