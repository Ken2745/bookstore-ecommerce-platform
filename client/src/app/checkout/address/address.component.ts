import { Component,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../../shared/models/address';
import { CheckoutComponent } from '../checkout.component';


import { CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-address',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './address.html',
  styleUrl: './address.scss',
})
export class AddressComponent {
  addressForm: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    //private checkoutComponent: CheckoutComponent
  ){
    this.addressForm = this.formBuilder.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Street: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      ZipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
    });
  }
  onSubmit(){
    if(this.addressForm.valid){
      const addressData: Address = this.addressForm.value;
      console.log('Submitted Address:', addressData);
    }
  }

  @Output() nextStep = new EventEmitter<void>();
  goToNextStep(){
    if(this.addressForm.valid){
      //Navigate to shipment page
      this.router.navigate(['/checkout/shipment']);
      //set the current step to Shipment
      //this.checkoutComponent.setCurrentStep('shipment');
    }
  }
}
