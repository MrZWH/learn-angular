import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  // private _username = '';
  // @Emoji() result = 'hello';
  // @Output() usernameChange = new EventEmitter();
  channels: Channel[] = [
    {
      id: 5,
      title: '9块9特卖',
      icon: 'xxxx',
      link: 'food'
    }
  ];
  constructor() {}

  ngOnInit() {}

  // @Confirmable('您确认要执行吗？')
  // handleClick() {
  //   console.log('点击已执行');
  // }

  // @Input()
  // public get username(): string {
  //   return this._username;
  // }

  // public set username(value: string) {
  //   this._username = value;
  //   this.usernameChange.emit(value);
  // }
}
