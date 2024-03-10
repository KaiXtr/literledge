import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lt-search-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

}
