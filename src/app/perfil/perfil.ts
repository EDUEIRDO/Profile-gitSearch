import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para requisições HTTP
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ngModel para capiturar o conteudo digitado para a busca
import { environment } from '../../environments/environment'; // Importa a variavel do ambiente que contem as chaves da API
import { ActivatedRoute, Router } from '@angular/router'; // ActivatedRoute para acessar os parâmetros da URL
import { MatIcon } from '@angular/material/icon'; // Lib de ícones

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, MatIcon, FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})

export class Perfil {

  // Propriedades para armazenar os dados do usuário, repos e estado da UI
  data: any;
  datarepos: any[] = [];
  loading = false;
  error: string | null = null;
  username: string = '';

  // Esse contructor é usado para injetar os serviços necessários, Router e HttpClient
  constructor(private route: ActivatedRoute, private router: Router ,private http: HttpClient) {
    this.route.params.subscribe(params => {
      const username = params['username'];
      if (username) {
        console.log('Fetching data for user:', username);
        this.fetchData(username); 
      }
    });
  }

  // Navega de volta para a página inicial
  homePage(): void {
    this.router.navigate(['']);
  }
  
    // Lida com a busca de um novo usuário através do campo de pesquisa na página de perfil
  onSearchClick(username: string): void {
    if (!username || username.trim() === '') {
      // Alerta se o campo estiver vazio, evita requesições inválidas
      alert('Please enter a username to search.');
      return;
    }
    console.log('Searching for user:', username);
    // Navega até a rota para o novo usuário, aqui ele recarrega o componente com os novos dados
    this.router.navigate(['/user', username]);
  }

  // Faz as requisições para a API do GitHub para obter dados do perfil e repositórios.
  fetchData(username: string): void {
    this.loading = true; // Inicia o estado de carregamento
    this.error = null; 
    
    // Controi as URLs da API e o cabeçalho de autenticação
    const apiUrl = `https://api.github.com/users/${username}`;
    const apiKey = environment.apiKey;
    const headers = {
      Authorization: `Bearer ${apiKey}`
    };

    // Primeira requisição para os dados do usuário
    this.http.get(apiUrl, {headers}).subscribe({
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

    // Segunda requisição para os repositórios do usuário
    const apiUrlRepos = `https://api.github.com/users/${username}/repos`
    this.http.get<any[]>(apiUrlRepos, { headers }).subscribe({
      next: (response) => {
        
        // Filtra e ordena repositorios com estrela
        this.datarepos = response.filter(repo => repo.stargazers_count >= 0).sort((a, b) => b.stargazers_count - a.stargazers_count);
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
