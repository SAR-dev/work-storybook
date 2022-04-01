import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  variant?: "btn-primary" | "btn-secondary" | "btn-success" | "btn-danger" | "btn-info" = "btn-primary"

  @Input()
  text?:string = "Simple Button"

  @Input()
  borderColor?:string

  @Input()
  radius?: string = "rounded-md"

  @Input()
  isLoading?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
