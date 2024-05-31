import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MusicRoutesService {

  constructor(private route: ActivatedRoute) {

  }

  routeActiveted(e: any) {
    console.log(e);
    this.routeEmitter.emit(e)
  }

  routeEmitter = new EventEmitter();




}
