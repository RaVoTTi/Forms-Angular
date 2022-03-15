import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
export class DinamicsComponent  {

  newGame:string = ''
  person: Person={
    name: "Valen",
    favs: [
      {
        id: 1,
        game: "GTA"
      },
      {
        id: 2,
        game: "SpiderMan"
      }
    ]
  }
  constructor() { }

  save(){
    console.log('Valennn')
  }  
  remove(index:number){
    this.person.favs.splice(index, 1)
  }
  add(){
    const newFav :Fav = {
      id: this.person.favs.length + 1,
      game: this.newGame
    }
    this.person.favs.push({...newFav})
    this.newGame = ''
  }
}
