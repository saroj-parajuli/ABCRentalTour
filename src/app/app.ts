import { Component } from '@angular/core';
import { AppComponent } from './main-container/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
