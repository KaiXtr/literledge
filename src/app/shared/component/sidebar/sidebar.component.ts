import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lt-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  linkList = [
    {
      name: "Início",
      href: "/"
    },
    {
      name: "Info",
      href: "/info"
    },
    {
      name: "Sobre",
      href: "/quem-somos"
    }
  ]
}
