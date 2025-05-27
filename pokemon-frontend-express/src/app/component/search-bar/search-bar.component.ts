import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon'; // ✅ Añadido para usar <mat-icon>
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class PokemonSearchComponent {
  pokemonName: string = '';
  pokemonData: any;
  esFavorito: boolean = false; // ✅ Estado de la estrella

  constructor(private pokemonService: PokemonService) {}

  buscarPokemon() {
    if (!this.pokemonName.trim()) return;

    this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe({
      next: (res) => {
        this.pokemonData = res;
        this.esFavorito = false; // ✅ Reinicia favorito al buscar uno nuevo
      },
      error: () => {
        this.pokemonData = { error: 'No encontrado' };
        this.esFavorito = false;
      }
    });
  }

  toggleFavorito() {
    this.esFavorito = !this.esFavorito;
  }
}
