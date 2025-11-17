import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculadora } from "./calculadora/calculadora";
import { ListasCompras } from './listas-compras/listas-compras';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculadora,ListasCompras],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadoraAngula');
}
