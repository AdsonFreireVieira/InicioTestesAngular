import { Component, signal } from '@angular/core';
import {Calculadora} from './calculadora/calculadora'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Calculadora,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadora');
}
