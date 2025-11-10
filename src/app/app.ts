import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Navbar } from './navbar/navbar'
import { Cart } from './cart/cart';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkWithHref, Navbar, Cart, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Actividad 1'); 

  carritoVisible: boolean = false;
  alternarCarrito() {
    this.carritoVisible = !this.carritoVisible;
  }
}