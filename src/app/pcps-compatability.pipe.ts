import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pcpsCompatability'
})
export class PcpsCompatabilityPipe implements PipeTransform {

  transform(videogames: any, selection: any): any {
    if(selection == false){
      return videogames;
    }

    return videogames.filter(function(videogame) {
      if(videogame.available_on.length > 1){
        for(var i = 0; i< videogame.available_on.length; i++){
          if(videogame.available_on[i].platform_name.toLowerCase().includes('playstation')){
            for(var j =0; j<videogame.available_on[i].compatible_with.length; j++){
              if(videogame.available_on[i].compatible_with[j].platform_name.toLowerCase().includes('windows')){
                //console.log(videogame.title);
                return videogame;
              }
            }
          }
        }
      }
    })
  }

}
