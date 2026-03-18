import { Component, signal } from '@angular/core';
import { Brands } from './brands/brands';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Brands],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Apibrand');
}
