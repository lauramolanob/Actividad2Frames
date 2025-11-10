import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Navbar } from './navbar/navbar'
import { Cart } from './cart/cart';
import { Carousel } from './carousel/carousel';
import { Categories } from './categories/categories';
import { News } from './news/news';
import { Pagination } from './pagination/pagination' 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkWithHref, Navbar, Categories, Carousel, News, Pagination, Cart],
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