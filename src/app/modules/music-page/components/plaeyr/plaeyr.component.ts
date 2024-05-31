import { Component } from '@angular/core';
import { PlayerService } from '../../plaeyr.service';

@Component({
  selector: 'app-plaeyr',
  templateUrl: './plaeyr.component.html',
  styleUrl: './plaeyr.component.scss'
})
export class PlaeyrComponent {


  constructor(private playerService: PlayerService) { }

  audio = new Audio();

  isChooseMusic: boolean = false;
  isPlay: boolean = true;
  isRepeat = false;
  timeLineCurrent: string = '0:00'
  timeLine: string = '0:00'
  timeLineNumber: number = 0;
  timeLinePercent: number = 0;
  timeCurent: number = 0;

  title: string = '';
  artist: string = '';
  img: string = '';

  ngOnInit() {

    this.audio.volume = 0.5;

    this.playerService.playPlayr.subscribe(({ results }) => {
      this.isChooseMusic = true;

      this.audio.src = results[0]['audio'];
      this.img = results[0]['image'];

      this.title = results[0]['name'];
      this.artist = results[0]['artist_name'];


      this.isPlay = true;
      this.audioUpdateHandler();
      console.log(results);

    })
  }

  audioUpdateHandler() {
    this.audio.play();

    this.audio.addEventListener('loadeddata', () => {
      this.timeLineNumber = this.audio.duration;
      this.timeLine = this.secondInMinute(this.timeLineNumber);
    })

    this.audio.addEventListener('timeupdate', () => {
      this.timeCurent = this.audio.currentTime;
      this.timeLineCurrent = this.secondInMinute(this.timeCurent);
      this.timeLinePercent = (this.timeCurent / this.timeLineNumber) * 100;

      if (this.timeCurent >= this.timeLineNumber) {
        if (this.isRepeat) {
          this.audioUpdateHandler()
        }
      }
    })
  }

  playAudio() {
    if (this.isPlay) {
      this.audio.pause();
      this.isPlay = !this.isPlay;
    } else {
      this.audio.play();
      this.isPlay = !this.isPlay;
    }
  }

  backMusic() {
    this.playerService.backMusic()
  }
  
  nextMusic() {
    this.playerService.nextMusic()
  }

  setVolume(e: any) {
    this.audio.volume = e.target.value;
  }

  rewindAudio(e: any) {
    let divWidth = e.srcElement.clientWidth;
    let clickWidth = e.offsetX;

    this.timeLinePercent = clickWidth / divWidth * 100;
    this.audio.currentTime = this.timeLineNumber / 100 * this.timeLinePercent;
  }



  repeatMusic() {
    this.isRepeat = !this.isRepeat;
  }

  secondInMinute(time: number): string {
    let minute = Math.floor(time / 60);
    let second = Math.floor(time - 60 * minute);
    let secondStr = ''

    if (second < 10) {
      secondStr = `0${second}`;
    } else {
      secondStr = `${second}`;
    }
    return `${minute}:${secondStr}`
  }

}
