import { Component } from '@angular/core';
import { TopMenu } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMenus: TopMenu[] = [
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
  handleTabSelected(tabMenu: TopMenu) { }
}
