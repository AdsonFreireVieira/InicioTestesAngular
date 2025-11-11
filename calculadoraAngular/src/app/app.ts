import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Calculadora} from './calculadora/calculadora'

@Component({
  selector: 'app-root',
  imports: [Calculadora,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadora');
}
