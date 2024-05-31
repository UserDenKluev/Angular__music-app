import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicPageModule } from './modules/music-page/music-page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicPageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-app';
}
