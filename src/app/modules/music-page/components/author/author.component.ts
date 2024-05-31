import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {
  @Input() author: any;
}
