import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './components/authors/authors.component';
import { MusicPageComponent } from './components/music-page/music-page.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { PlaeyrComponent } from './components/plaeyr/plaeyr.component';
import { MusicListComponent } from './components/music-list/music-list.component';

@NgModule({
  declarations: [
    MusicPageComponent,
    AuthorsComponent,
    AuthorComponent,
    AuthorDetailComponent,
    PlaeyrComponent, MusicListComponent],
  imports: [
    CommonModule, RouterLink, RouterOutlet
  ],
  exports: [MusicPageComponent]
})
export class MusicPageModule { }
