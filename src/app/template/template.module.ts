import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicsComponent,
    SwitchesComponent,
    DinamicsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
