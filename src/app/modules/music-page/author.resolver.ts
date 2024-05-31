import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { HttpMusicService } from './http-music.service';

export const authorResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
  return inject(HttpMusicService).getAuthorDetail(route.paramMap.get('id')!);
};
