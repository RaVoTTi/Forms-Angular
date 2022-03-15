import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
interface Person {
  name: string,
  favs: Fav[]
}
interface Fav{
  id: number,
  game: string
}
@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  // person: Person={
  //   name: "Valen",
  //   favs: [
  //     {
  //       id: 1,
  //       game: "GTA"
  //     },
  //     {
  //       id: 2,
  //       game: "SpiderMan"
  //     }
  //   ]
  // }

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(4)]],
    newGame: []
  })

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
  }
  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }

    console.log(this.myForm.value)
    this.myForm.reset()
  }
  validateCamp(key:string){
    return this.myForm.controls[key].errors && this.myForm.controls[key].touched
  }

}
