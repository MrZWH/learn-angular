import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ImageSliderComponent } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('imageSlider', { static: true }) imgSlider: ImageSliderComponent;

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log(this.imgSlider);
  }
}
