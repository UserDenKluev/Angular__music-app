import { Component } from '@angular/core';
import { HttpMusicService } from '../../http-music.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../plaeyr.service';
import { MusicRoutesService } from '../../music-routes.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.scss'
})
export class AuthorDetailComponent {

  constructor(
    private activateRoute: ActivatedRoute,
    private playerService: PlayerService,
    private routesService: MusicRoutesService,
  ) {
    this.routesService.routeActiveted(this.activateRoute.snapshot.url);
  }

  authorMusicList: any[] = [];
  author: any = {};

  playMusic(id: string) {
    this.playerService.playMusic(id);
    this.playerService.getArrMusic(this.authorMusicList);
  }

  ngOnInit() {
    this.activateRoute.data.subscribe(({ musicList }) => {
      this.author.name = musicList['results']['0']['name']
      this.author.image = musicList['results']['0']['image']
      this.authorMusicList = musicList['results']['0']['tracks'];
    });

  }
}
