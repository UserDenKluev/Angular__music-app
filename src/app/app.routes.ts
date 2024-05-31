import { Routes } from '@angular/router';
import { AuthorsComponent } from './modules/music-page/components/authors/authors.component';
import { authorResolver } from './modules/music-page/author.resolver';
import { AuthorDetailComponent } from './modules/music-page/components/author-detail/author-detail.component';
import { MusicListComponent } from './modules/music-page/components/music-list/music-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/author-list', pathMatch: 'full' },
    { path: 'author-list', component: AuthorsComponent },
    { path: 'author-datail/:id', component: AuthorDetailComponent, resolve: { musicList: authorResolver } },
    { path: 'music-list', component: MusicListComponent },
    { path: '**', redirectTo: '/author-list', pathMatch: 'full' },
];
