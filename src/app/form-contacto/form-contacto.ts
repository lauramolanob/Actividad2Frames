import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-contacto.html',
  styleUrl: './form-contacto.css'
})
export class FormContacto implements OnInit{
  title = 'Contáctanos';
  formBuilder = inject(FormBuilder);
  formComunicaciones = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    messaje:new FormControl('', [Validators.required, Validators.minLength(50)]), 
  });
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.formComunicaciones.value);
  }
};
 