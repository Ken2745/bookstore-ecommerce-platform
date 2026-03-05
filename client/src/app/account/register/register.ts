import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ){

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSubmit(){

    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {

        this.toastr.success("Account created successfully");

        this.router.navigateByUrl('/account/profile');

      },
      error: () => {
        this.toastr.error("Registration failed");
      }
    });

  }

}