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
        return videogame.title.toLowerCase().includes(searchString.toLowerCase()) ||
          videogame.publisher.toLowerCase().includes(searchString.toLowerCase());
    })
  }

}
