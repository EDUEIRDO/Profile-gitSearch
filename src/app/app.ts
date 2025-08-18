import { ApplicationConfig, Component, signal, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Request } from './request/request';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Request, FormsModule, CommonModule],
  template: `<section>
    <h1>{{title}}</h1>
    <input type="text" placeholder="Search" [(ngModel)]="username">
    <button (click)="onSearchClick()">Search</button>
    <hr>

    @if (searchTerm) {
      <app-request [searchTerm]="searchTerm"></app-request>
    }
  </section>`,
  styleUrl: './app.css'
})

export class App {
  title = 'Search d_evs';
  username = '';
  searchTerm = '';

  onSearchClick(): void {
    this.searchTerm = this.username;
  }
}
