import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form;
  constructor( private fb:FormBuilder, private auth:AuthService) { 
    this.form=fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.email],
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    }, {validator: matchingfield('password','confirmPassword')})
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.errors);
    this.auth.register(this.form.value)
  }

  isValid(control){
    this.form.controls[control].inValid && this.form.controls[control].touched;
  }
}
  function matchingfield(field1, field2){

    return form=>{
      if(form.controls[field1].value!==form.controls[field2].value)
        return {mismatchedFields:true}

    }
  
}
