import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Search d_evs';
  username = '';
  constructor(private router: Router) {}

  onSearchClick(username: string): void {
    if (!username || username.trim() === '') {
      alert('Please enter a username to search.');
      return;
    }
    console.log('Searching for user:', username);
    this.router.navigate(['/user', username]);
  }
}
