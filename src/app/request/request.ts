import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  imports: [CommonModule],
  templateUrl: './request.html',
  styleUrl: './request.css'
})

export class Request {

  data: any;
  datarepos: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private route: ActivatedRoute ,private http: HttpClient) {
    this.route.params.subscribe(params => {
      const username = params['username'];
      if (username) {
        console.log('Fetching data for user:', username);
        this.fetchData(username); 
      }
    });
  }

  fetchData(username: string): void {
    this.loading = true;
    this.error = null;

    const apiUrl = `https://api.github.com/users/${username}`;
    const apiKey = environment.apiKey;
    const headers = {
      Authorization: `Bearer ${apiKey}`
    };

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

    const apiUrlRepos = `https://api.github.com/users/${username}/repos`
    this.http.get<any[]>(apiUrlRepos, {headers}).subscribe({
      next: (response) => {
        this.datarepos = response.filter(repo => repo.stargazers_count >= 1).sort((a, b) => b.stargazers_count - a.stargazers_count);
        this.loading = false;
        console.log('Received data:', this.datarepos);
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
