import { Component, OnInit, Inject } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../../service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string
  ) {}
  topMenus: TopMenu[] = [];
  // username = '';
  scrollableTabBgColor: string;
  handleTabSelected(topMenus: TopMenu) {
    // const colors = ['red', 'blue', 'black'];
    // const idx = Math.floor(Math.random() * 3);
    // this.scrollableTabBgColor = colors[idx];
    // console.log(this.topMenus);
    this.router.navigate(['home', topMenus.link]);
  }

  ngOnInit(): void {
    this.topMenus = this.service.getTabs();
  }
}
