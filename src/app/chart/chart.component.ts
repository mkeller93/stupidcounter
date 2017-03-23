import { Component, OnInit, Input } from '@angular/core';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

import { Statistic } from '../../model/statistic';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input("key")
  public statisticKey: String;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fr'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = undefined;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.af.database.object("/statistics/" + this.statisticKey).subscribe(stat => this.setChartData(stat));
  }

  setChartData(stat: Statistic) {
    this.barChartData = [
      {data: [stat.MonMorning, stat.TueMorning, stat.WedMorning, stat.ThuMorning, stat.FrMorning], label: 'Morning'},
      {data: [stat.MonAfternoon, stat.TueAfternoon, stat.WedAfternoon, stat.ThuAfternoon, stat.FrAfternoon], label: 'Afternoon'}
    ]
  }

}
