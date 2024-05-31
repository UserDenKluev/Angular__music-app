import { EventEmitter, Injectable } from '@angular/core';
import { HttpMusicService } from './http-music.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpMusicService: HttpMusicService) { }

  arrMusic: string[] = [];
  nowId: string = '';

  playMusic(id: string) {
    this.nowId = id;

    this.httpMusicService.getMusic(id).subscribe((data) => {
      this.playPlayr.emit(data);
    });
  }

  getArrMusic(arr: any[]) {
    this.arrMusic = arr.map((item) => item.id);
  }

  backMusic() {
    this.playMusic(this.arrMusic[this.arrMusic.indexOf(this.nowId) - 1])
  }

  nextMusic() {
    
    console.log(this.nowId);
    
    this.playMusic(this.arrMusic[this.arrMusic.indexOf(this.nowId) + 1])

  }

  playPlayr = new EventEmitter();

}