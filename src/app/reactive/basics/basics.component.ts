import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('GPU'),
  //   price: new FormControl(150),
  //   quantity: new FormControl(2),

  // })


  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(4)]],
    price: [, [Validators.required, Validators.min(1)]],
    quantity: [, [Validators.required, Validators.min(1)]],
  });

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(){
    this.myForm.reset({
      name: 'GPUs',
      price: 123
    })
  }
  
  validateCamp(key: string){
    return this.myForm.controls[key].errors && this.myForm.controls[key].touched
  }
  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.value)
    this.myForm.reset()
  }
}
