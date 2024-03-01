import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(content: string, returnFullText: boolean = false): string {
    const words = content.split(' ');
    const limit = 35;
    if(!returnFullText && words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return content;
    }
  }

}
