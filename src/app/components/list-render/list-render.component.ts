import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  // trabalhando com interface
  animals: Animal[] = [
    {name: "Turca", type:"dog", age: 4},
    {name: "Tom", type: "cat", age: 10},
    {name: "Frida", type: "dog", age: 5},
    {name: "Bob", type: "horse", age: 1}
  ]

  // animals = [
  //   {name: "Turca", type:"dog"},
  //   {name: "Tom", type: "cat"},
  //   {name: "Frida", type: "dog"},
  //   {name: "Bob", type: "horse"}
  // ]

 // animal: Animal = {
 //   name: 'Teste',
 //   type: 'Alguma coisa',
 //   age: 10
//  }
  
  animalDetails = ''

   constructor() {}
   
   ngOnInit(): void{}
      
   showAge(animal: Animal){
     this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
   }
}  

