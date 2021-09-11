import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

// declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]

})
export class RegisterComponent implements OnInit {

  loading = false;

  // 'user': User;
  'emailPattern': "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  user: any = {};

  registrationForm!: FormGroup;

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetForm();
    //this.createRegistraionForm();
  }

  resetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.user = 
    {
      'FirstName': '',
      'SurName': '',
      'Email': '',
      'Password': '',
      'Bday': '',
      'Bmonth': '',
      'Byear': '',
      'Gender': ''
    }
  }

  // createRegistraionForm() {
  //   this.registrationForm = this.formBuilder.group({
  //     FirstName: [null, Validators.required],
  //     SurName: [null, Validators.required],
  //     Email: [null, Validators.required],
  //     Password: [null, Validators.required],
  //     Bday: [null, Validators.required],
  //     Bmonth: [null, Validators.required],
  //     Byear: [null, Validators.required],
  //     Gender: [null, Validators.required]
  //   })
  // }

  // get FirstName()
  // {
  //   return this.registrationForm.get('FirstName') as FormControl;
  // }
  // get SurName()
  // {
  //   return this.registrationForm.get('SurName') as FormControl;
  // }
  // get Email()
  // {
  //   return this.registrationForm.get('Email') as FormControl;
  // }
  // get Password()
  // {
  //   return this.registrationForm.get('Password') as FormControl;
  // }
  // get Bday()
  // {
  //   return this.registrationForm.get('Bday') as FormControl;
  // }
  // get Bmonth()
  // {
  //   return this.registrationForm.get('Bmonth') as FormControl;
  // }
  // get Byear()
  // {
  //   return this.registrationForm.get('Byear') as FormControl;
  // }
  // get Gender()
  // {
  //   return this.registrationForm.get('Gender') as FormControl;
  // }

  onSubmit(form: NgForm) {
    console.log(this.user);
    // console.log(this.registrationForm.value);
    // this.user = Object.assign(this.user, this.registrationForm.value);
    // localStorage.setItem('Users', JSON.stringify(this.user));

    // this.userService.registerUser(form.value)
    // .subscribe((data:any)=> {
    //   if(data.Succeeded == true)
    //   {
    //     this.resetForm(form);
    //     this.toastr.success('User Registration Successful');
    //   }
    //   else
    //   {
    //     this.toastr.error(data.Errors[0]);
    //   }
    // })

    //  this.loading = true;
    // if (form.value._id == "") {
    //   this.userService.registerUser(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.router.navigate(['/home']);
    //     M.toast({html: 'Registered Successfully', classes: 'rounded'});
    //   });
    // }
    // else {
    //   this.router.navigate(['/']);
    // }
    // console.log(this.registrationForm.value);
    // this.user = Object.assign(this.user, this.registrationForm.value);
    // localStorage.setItem('Users', JSON.stringify(this.user));
  }

}
