import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  {

  @ViewChild('myForm') myForm!:NgForm;
  constructor() { }
  validateProduct(): boolean{
    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product']?.touched
  }
  validatePrice():boolean{
    return this.myForm?.controls['price']?.value <= 0 && this.myForm?.controls['price']?.touched
  }
  save(){
    console.log('Posteo exitoso')
    this.myForm.resetForm({price: 0,quantity: 0})
  }
}
