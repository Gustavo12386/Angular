import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {
    someText = 'TESTANDO O PIPE OPERATOR';
    
    today = new Date();

    constructor() {}

    ngOnInit(): void {
      
    }
}
