import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-troll',
  templateUrl: './troll.component.html',
  styleUrls: ['./troll.component.css']
})
export class TrollComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.show = true, 1500);
  }

}
