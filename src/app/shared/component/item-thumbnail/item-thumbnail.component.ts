import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemObject } from '../../../model/itemObject'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lt-item-thumbnail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './item-thumbnail.component.html',
  styleUrl: './item-thumbnail.component.scss'
})
export class ItemThumbnailComponent {
  @Input()
  itemObject: ItemObject = {
    titulo: "",
    autor: "",
    imgSrc: "",
    ano: 0
  };
}
