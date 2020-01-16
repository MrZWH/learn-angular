import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  ImageSliderComponent,
  TopMenu,
  ImageSlider,
  Channel
} from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('imageSlider', { static: true }) imgSlider: ImageSliderComponent;
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    }
  ];
  imageSliders: ImageSlider[] = [
    {
      imgUrl: '',
      link: '',
      caption: ''
    }
  ];
  channels: Channel[] = [
    {
      id: 5,
      title: '9块9特卖',
      icon: 'xxxx',
      link: 'food'
    }
  ];
  // username = '';
  scrollableTabBgColor: string;
  handleTabSelected(tabMenu: TopMenu) {
    const colors = ['red', 'blue', 'black'];
    const idx = Math.floor(Math.random() * 3);
    this.scrollableTabBgColor = colors[idx];
    console.log(this.topMenus);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log(this.imgSlider);
  }
}
