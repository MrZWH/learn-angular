import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
