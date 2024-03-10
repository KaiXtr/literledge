import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { SearchBarComponent } from './shared/component/search-bar/search-bar.component';
import { ItemThumbnailComponent } from './shared/component/item-thumbnail/item-thumbnail.component';
import { FooterComponent } from './shared/component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SearchBarComponent,
    ItemThumbnailComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'literledge';
  itemsList = [
    {
      titulo: "Exemplo 1",
      autor: "Fulano",
      ano: 1990
    },
    {
      titulo: "Exemplo 2",
      autor: "Ciclano",
      ano: 2000
    },
    {
      titulo: "Exemplo 3",
      autor: "Ciclano",
      ano: 2000
    }
  ]
}
