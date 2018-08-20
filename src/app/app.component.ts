import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;
  email;
  password;
  passwordConfirmation;


  crearUsuario(formulario) {
    const title = 'app';
    this.title.valueOf("asd");
    console.log(formulario);
    const controles = formulario.controls;
    const password = controles.password.value;
    const passwordConfirmation = controles.passwordConfirmation.value;

    if (password === passwordConfirmation) {
      alert('Muy bien!');
    } else {
      this.password = undefined;
      this.passwordConfirmation = undefined;
      alert('Los passwords no son iguales');
    }
  }


}

