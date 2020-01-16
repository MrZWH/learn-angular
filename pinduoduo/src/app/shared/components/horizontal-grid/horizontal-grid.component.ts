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
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';
  constructor() {}

  ngOnInit() {}

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols *
      0.4}rem) / ${this.displayCols}))`;
  }

  handleScroll(ev) {
    this.sliderMargin = `0 ${(100 * ev.target.scrollLeft) /
      ev.target.scrollWidth}%`;
  }

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
