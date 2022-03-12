import { Pipe, PipeTransform } from '@angular/core';
import {Class} from "./class.model";

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(classes: Class[], searchValue: string): Class[] {

    if(!classes || !searchValue) {
      return classes;
    }

    return classes.filter(element => {
      element.teacher.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        element.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    });
  }

}
