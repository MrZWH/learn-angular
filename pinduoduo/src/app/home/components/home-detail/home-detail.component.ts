import { Component, OnInit } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  selectedTabLink;
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
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      console.log('路径参数：', params);
      this.selectedTabLink = params.get('tabLink');
    });
    this.router.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
  }
}
