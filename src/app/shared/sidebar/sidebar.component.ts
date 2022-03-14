import { Component} from '@angular/core';
interface MenuItem {
  name: string,
  url: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{
  templateMenu: MenuItem[] = [
    {
      name: 'Basics',
      url: './template/basics'
    },
    {
      name: 'Switches',
      url: './template/switches'
    },
    {
      name: 'Dinamics',
      url: './template/dinamics'
    },
  ]
  reactiveMenu: MenuItem[] = [
    {
      name: 'Basics',
      url: './reactive/basics'
    },
    {
      name: 'Switches',
      url: './reactive/switches'
    },
    {
      name: 'Dinamics',
      url: './reactive/dinamics'
    },
  ]
  constructor() { }

  

}
