import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input()
  circleColor:string = "pink"

  @Input()
  backgroundColor?:string

  @Input()
  textColor:string = "white"

  @Input()
  text?:string

  @Input()
  count?:number

  constructor() { }

  ngOnInit(): void {
  }

}
