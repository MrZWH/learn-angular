import { Injectable } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/components';

/**
 * 如果采用 `providedIn` ，
 * 这个形式是 Angular v6 之后引入的
 * 这种写法和传统的在 Module 中设置 providers 数组的写法的区别在于
 * 可以让服务在真正被其它组件或服务注入时才编译到最后的 js 中
 * 对于引入第三方类库较多的应用可以有效减小 js 大小
 */
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
