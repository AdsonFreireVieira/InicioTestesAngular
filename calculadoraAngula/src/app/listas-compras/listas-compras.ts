import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ItemLista} from './itemlista'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listas-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './listas-compras.html',
  styleUrl: './listas-compras.scss',
})
export class ListasCompras {
item: string='';
 lista: ItemLista[]=[];
adicionarItem(){
let  itemlista = new ItemLista();
itemlista.nome = this.item
itemlista.id = this.lista.length +1;

this.lista.push(itemlista);

this.item ='';
console.table(this.lista)
}
}
