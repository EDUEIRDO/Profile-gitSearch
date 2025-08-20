import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'Search d_evs';
  username = '';
  constructor(private router: Router) {}

  onSearchClick(username: string): void {
    console.log('Searching for user:', username);
    this.router.navigate(['/user', username]);
  }
}