import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
/* FormBuilder est un service d'angular que l'on utilise afin de faciliter la mise en place d'un form */
/* FormGroup va regrouper la valeur de chaque form control en un objet  */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /* On va créer un objet FormGroup et sa va regrouper la valeur de chaque form control en un objet
  username email password et sexe*/
  

  myForm: FormGroup
  passwordFormGroup: FormGroup

  /* Dans le FormBuilder on va instancier un formbuilder*/
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    /* On initialise notre objet myform */
    this.passwordFormGroup = this.formBuilder.group({
      password: '',
      cpassword: ''
    })

    this.myForm = this.formBuilder.group({
      username: '',
      email: '',
      gender: '',
      passwords: this.passwordFormGroup
    })
  }

}
/* C'est ici qu'on va créer notre formulaire php */