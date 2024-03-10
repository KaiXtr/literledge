import { Component } from '@angular/core';
import { ItemThumbnailComponent } from '../../shared/component/item-thumbnail/item-thumbnail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    ItemThumbnailComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  busca: string = "exemplo";
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
