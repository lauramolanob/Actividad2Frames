import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Output() carritoToggle = new EventEmitter<void>();

  onCarritoClick() {
        this.carritoToggle.emit();
    }

}
