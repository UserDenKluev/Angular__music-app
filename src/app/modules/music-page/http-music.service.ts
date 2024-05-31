import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpMusicService {

  constructor(private http: HttpClient) { }

  getDataAuthors() {
    return this.http.get("https://api.jamendo.com/v3.0/artists/?client_id=72dbb55c&format=jsonpretty");
  }

  getAuthorDetail(id: string) {
    return this.http.get(`https://api.jamendo.com/v3.0/artists/tracks/?client_id=72dbb55c&format=jsonpretty&order=track_name_desc&name=${id}`);
  }

  getMusic(id: string) {
    return this.http.get(`https://api.jamendo.com/v3.0/tracks/?client_id=72dbb55c&format=jsonpretty&id=${id}`)
  }
}
