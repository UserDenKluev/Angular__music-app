import { Component } from '@angular/core';
import { MusicRoutesService } from '../../music-routes.service';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrl: './music-page.component.scss'
})
export class MusicPageComponent {
  routes: any[] = [];

  constructor(private musicRoutes: MusicRoutesService) { }

  ngOnInit() {
    this.musicRoutes.routeEmitter.subscribe((e) => {
      this.routes = e;
    })
  }
}
