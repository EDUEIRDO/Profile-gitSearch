import { ApplicationConfig, Component, signal, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Request } from './request/request';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Request, FormsModule, CommonModule],
  template: `<section>
    <h1>Github User Search</h1>
    <input type="text" placeholder="Enter a Github usename..." [(ngModel)]="username">
    
    <app-request [searchTerm]="username"></app-request>
  </section>`,
  styleUrl: './app.css'
})

export class App {
  title = 'Github User Search';
  username = '';
}
