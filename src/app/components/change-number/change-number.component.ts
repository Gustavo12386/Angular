import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'] 
})
export class ChangeNumberComponent {
    @Output() changeNumber: EventEmitter<any> = new EventEmitter<any>(); 

    constructor() {}

    ngOnInit(): void {
        
    }

    handleClick() {
      this.changeNumber.emit(); 
    }
}
