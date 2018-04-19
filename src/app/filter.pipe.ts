import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(videogames: any, searchString: any): any {
    if (searchString === undefined) {
      return videogames;
    }
    return videogames.filter(function(videogame) {
      if (videogames.length > 0) {
        return videogame.title.toLowerCase().includes(searchString.toLowerCase());
      } else {
        return 0;
      }
    })
  }

}
