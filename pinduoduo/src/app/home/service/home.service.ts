import { Injectable } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/components';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
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
  getTabs() {
    return this.topMenus;
  }
  getChannels() {
    return this.channels;
  }
  getBanners() {
    return this.imageSliders;
  }
}
