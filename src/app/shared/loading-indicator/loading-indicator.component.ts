import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html'
})
export class LoadingIndicatorComponent implements OnInit {

  @Input()
  public message: String;

  constructor() { }

  ngOnInit() {
  }

}
