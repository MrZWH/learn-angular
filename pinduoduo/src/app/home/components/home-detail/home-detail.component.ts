import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}
  selectedTabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      console.log('路径参数：', params);
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck();
    });
    this.router.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    this.imageSliders = this.service.getBanners();
    this.channels = this.service.getChannels();
  }
}
