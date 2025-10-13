import { Component } from '@angular/core';
import { MainContainer } from './main-container/mainContainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContainer],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
