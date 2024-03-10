import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lt-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SearchBarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
