import { Component } from '@angular/core';
import { SearchBarComponent } from '../../shared/component/search-bar/search-bar.component';
import { ItemThumbnailComponent } from '../../shared/component/item-thumbnail/item-thumbnail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    ItemThumbnailComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  itemsList = [
    {
      titulo: "Exemplo 1",
      autor: "Fulano",
      imgSrc: "",
      ano: 1990
    },
    {
      titulo: "Exemplo 2",
      autor: "Ciclano",
      imgSrc: "",
      ano: 2000
    },
    {
      titulo: "Exemplo 3",
      autor: "Ciclano",
      imgSrc: "",
      ano: 2000
    }
  ]
}
