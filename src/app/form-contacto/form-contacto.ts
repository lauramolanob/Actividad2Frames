import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-contacto.html',
  styleUrl: './form-contacto.css'
})
export class FormContacto implements OnInit{
  title = 'Contáctanos';
  infoUser = {
    name: '',
    email: '',
    phone: '',
    messaje:'', 
  };
  ngOnInit(): void {
  }
  onSubmit(form:any){
    console.log(form)
  }
};
 