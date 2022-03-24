import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @Input()
  backgroundColor?: string

  @Input()
  badgeText?: string

  @Input()
  badgeColor?: string = "gray"

  @Input()
  textColor: string = "black"

  @Input()
  codeColor: string = "#7e22ce"

  constructor() { }

  ngOnInit(): void {
  }

}
