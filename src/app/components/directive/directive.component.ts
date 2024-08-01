import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];

  underline = 'underline-title'

  constructor() {}

  ngOnInit(): void {
        
  }

}
