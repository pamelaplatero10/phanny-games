import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FondoEstrellado } from './fondo-estrellado/fondo-estrellado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FondoEstrellado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('phanny-games');
}
