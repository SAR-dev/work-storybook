import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @Input()
  badgeBackgroundColor?: string = "#fed85d"

  @Input()
  badgeTextColor?: string = "#000000"

  @Input()
  badgeText?: string = "きくや＿タスク"

  @Input()
  theme: string = "dark"

  @Input()
  spacing: string = "spacing-10"


  getClass(){
    return this.theme + " " + this.spacing
  }

  constructor() { }

  ngOnInit(): void {
  }

}
