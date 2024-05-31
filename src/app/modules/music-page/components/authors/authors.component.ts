import { Component } from '@angular/core';
import { HttpMusicService } from '../../http-music.service';
import { MusicRoutesService } from '../../music-routes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent {
  constructor(private httpMusicService: HttpMusicService,
    private activateRoute: ActivatedRoute,
    private routesService: MusicRoutesService,
    
  ) { 
    this.routesService.routeActiveted(this.activateRoute.snapshot.url);
  }

  authors: any[] = [];

  ngOnInit() {

    this.httpMusicService.getDataAuthors()
      .subscribe((data: any) => {
        this.authors = data['results'];
        console.log(this.authors);
        
      })
  }


}
