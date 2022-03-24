import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  logoColor: string = '#d14f4f'

  @Input()
  name: string = "ALTAIR"

  getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    var day = (date.getDate()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    var formattedTime = `${year}年${month}月${day}日`
    return formattedTime
  }

  constructor() { }

  ngOnInit(): void {
  }

}
