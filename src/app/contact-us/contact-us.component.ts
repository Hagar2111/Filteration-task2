import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from '../Services/form.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {


  constructor(private _FormService:FormService){}


  applyForm = new FormGroup({

    name: new FormControl(null, 
    [
      Validators.pattern('^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$'),
      Validators.minLength(3), 
      Validators.maxLength(30), 
      Validators.required
    ]),
    
    email: new FormControl(null, 
      [
        Validators.required, 
        Validators.email, 
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$' )
      ]),
    
    phone: new FormControl(null, 
      [
        Validators.required , 
        Validators.pattern('^01[0125][0-9]{8}$')
      ]
    )

  });


  error:string ='';


  submitForm(application:FormGroup) {

    this._FormService.submitApplication(application.value).subscribe((response) => {

      if(response.message == 'success')
      {
        this.error = 'Data Sent Successfully'
      }
      else
      {
        this.error = response.errors.msg
      }
    })
  }

}
