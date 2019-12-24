import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
