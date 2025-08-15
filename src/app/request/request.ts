import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request.html',
  styleUrl: './request.css'
})
export class Request implements OnChanges {

  @Input() searchTerm: string | undefined;

  data: any;
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm'] && this.searchTerm) {
      this.fetchData(this.searchTerm);
    }
  }

  fetchData(username: string): void {
    this.loading = true;
    this.error = null;

    const apiUrl = `https://api.github.com/users/${username}`;

    this.http.get(apiUrl).subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
        console.log('Received data:', this.data);
      },
      error: (err) => {
        this.error = 'Error at search data.';
        this.loading = false;
        console.error('Error:', err);
      },
      complete: () => {
        console.log('Request complete.');
      }
    });
  }
}