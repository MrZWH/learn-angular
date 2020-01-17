import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(private router: Router) {}
  topMenus: TopMenu[] = [
    {
      id: 1,
      title: '热门',
      link: ''
    },
    {
      id: 1,
      title: '男装',
      link: ''
    },
    {
      id: 1,
      title: '百货',
      link: ''
    },
    {
      id: 1,
      title: '运动',
      link: ''
    },
    {
      id: 1,
      title: '家纺',
      link: ''
    },
    {
      id: 1,
      title: '手机',
      link: ''
    },
    {
      id: 1,
      title: '母婴',
      link: ''
    },
    {
      id: 1,
      title: '电脑',
      link: ''
    },
    {
      id: 1,
      title: '水果',
      link: ''
    },
    {
      id: 1,
      title: '汽车',
      link: ''
    }
  ];
  // username = '';
  scrollableTabBgColor: string;
  handleTabSelected(topMenus: TopMenu) {
    // const colors = ['red', 'blue', 'black'];
    // const idx = Math.floor(Math.random() * 3);
    // this.scrollableTabBgColor = colors[idx];
    // console.log(this.topMenus);
    this.router.navigate(['home', topMenus.link]);
  }

  ngOnInit() {}
}
