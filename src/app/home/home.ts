import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel para capiturar o conteudo digitado para a busca
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Rotas
import { MatIcon } from '@angular/material/icon'; // Lib de ícones

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Inicializa a variavel para armazenar o nome de usuário do campo de busca
  username = '';
  // Injeta no contructor o router para habilitar as rotas
  constructor(private router: Router) {}

  // Navega para a pagina de perfil do usuário
  onSearchClick(username: string): void {
    if (!username || username.trim() === '') {
      // Alerta se o campo estiver vazio, evita requesições inválidas
      alert('Please enter a username to search.');
      return;
    }
    console.log('Searching for user:', username);
    // Redirecionamento para a rota /user com um parâmetro
    this.router.navigate(['/user', username]);
  }
}
