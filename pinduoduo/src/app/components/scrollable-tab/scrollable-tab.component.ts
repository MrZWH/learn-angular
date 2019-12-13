// tslint:disable-next-line: max-line-length
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
/**
 * 接口是可选的，也就是说只要有类似 ngOnInit 这样的方法存在
 * 生命周期的钩子函数还是正常执行
 * 但建议实现接口，好处一个是不会由于误删除某个钩子函数
 * 另一个是对组件涉及到哪些生命周期一目了然
 */
// tslint:disable-next-line: max-line-length
export class ScrollableTabComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();
  /**
   * 构造函数永远第一个被调用
   */
  constructor() { }
  /**
   * 在组件的 `@Input` 属性发送变化的时候调用
   * @param changes 索引对象，key 是属性的名字，value 是SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
  }

  // ngDoCheck(): void {
  // }

  ngOnInit() {
  }

  /**
   * 组件内容初始化
   */
  ngAfterContentInit(): void {
    console.log('组件内容初始化');
  }

  /**
   * 组件内容脏值检测
   */
  ngAfterContentChecked(): void {
    console.log('组件内容脏值检测');
  }

  /**
   * 组建的视图初始化
   */
  ngAfterViewInit(): void {
    console.log('组建的视图初始化');
  }

  /**
   * 组件视图脏值检测
   */
  ngAfterViewChecked(): void {
    console.log('组件视图脏值检测');
  }

  ngOnDestroy(): void {
    console.log('组件销毁');
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
