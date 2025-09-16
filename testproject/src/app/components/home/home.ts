import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Coaches } from './coaches/coaches';
import { Features } from './features/features';
import { Reviews } from './reviews/reviews';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navbar, Hero, Coaches, Features, Reviews, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
