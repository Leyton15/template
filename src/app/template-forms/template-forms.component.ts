import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  persona ={
    nombre: '',
    apellido: '',
    ciudad: '',
    edad: ''
  }

  procesar(){
    console.log(this.persona)
  }
}
