import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, NgFor],
})
export class HeaderComponent {
  links = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
  showMenu = false;

  menuClick(): void {
    console.log('Hello world');
    this.showMenu = !this.showMenu;
  }
}
function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}
