import { Component, Directive} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component'; 
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectiveComponent,
  IfRenderComponent, EventosComponent, EmitterComponent, ChangeNumberComponent, ListRenderComponent,
  PipesComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@email.com',
    role: 'Admin'
  }

  title = 'sistema-angular';
}