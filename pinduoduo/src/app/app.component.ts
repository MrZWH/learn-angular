import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '拼多多';
  menus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    }, {
      title: '男装',
      link: ''
    }, {
      title: '百货',
      link: ''
    }, {
      title: '运动',
      link: ''
    }, {
      title: '家纺',
      link: ''
    }, {
      title: '手机',
      link: ''
    }, {
      title: '母婴',
      link: ''
    }, {
      title: '电脑',
      link: ''
    }, {
      title: '水果',
      link: ''
    }, {
      title: '汽车',
      link: ''
    },
  ];

}
