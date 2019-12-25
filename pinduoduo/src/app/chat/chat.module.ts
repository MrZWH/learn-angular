import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
