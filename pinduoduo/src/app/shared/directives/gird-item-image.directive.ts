import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImage = '2rem';
  @Input() fitMode = 'cover';
  constructor(private elr: ElementRef, private rd2: Renderer2) {}
  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'heigth', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitMode);
  }
}
