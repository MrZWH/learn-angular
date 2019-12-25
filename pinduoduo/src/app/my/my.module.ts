import { NgModule } from '@angular/core';

import { MyRoutingModule } from './my-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})
export class MyModule { }
