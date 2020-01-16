import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {
  constructor(private elr: ElementRef, private rd2: Renderer2) {}
  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  }
}
