import { Component, Input } from '@angular/core';
import { ItemObject } from '../../model/itemObject'

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Input()
  itemObject: ItemObject = {
    titulo: "Exemplo",
    autor: "Autor",
    imgSrc: "",
    ano: 1990
  }
}
