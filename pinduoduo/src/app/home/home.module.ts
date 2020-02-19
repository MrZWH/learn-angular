import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent
} from './components';
import { HomeService, token } from './service';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent
  ],
  providers: [{ provide: token, useValue: 'http://localhost' }],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
