import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'defauld-button',
  templateUrl: './defauld-button.component.html',
  styleUrls: ['./defauld-button.component.css']
})
export class DefauldButtonComponent implements OnInit {

  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text: string = 'Submit'
  @Input()
  bgColor = '#e72929'
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem = 12;
  @Output()
  onClick = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

}
