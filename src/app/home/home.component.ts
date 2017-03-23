import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import { Statistic } from '../../model/statistic';
import { User } from '../../model/user';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users: FirebaseListObservable<any>;

    name: String;

    increaseCounter: number = 0;

    timeout: any = undefined;

    constructor(private af: AngularFire, private router: Router) {
      this.users = this.af.database.list("/users");
    }

    add() {
      let key = this.af.database.list("/statistics").push(new Statistic()).key;
      this.users.push({name: this.name, stupidCount: 0, statisticKey: key});
      this.name = "";      
    }

    increaseCount(user: any) {
      if(++this.increaseCounter > environment.MAX_CLICKS) {
          this.router.navigate(["/troll"]);
          return; 
      }
      user.stupidCount++;
      this.users.update(user.$key, user);
      this.updateStat(user);

      if(this.timeout === undefined) {
          this.timeout = setTimeout(() => {
              this.increaseCounter = 0;
              this.timeout = undefined;
          }, 1000);
      }      
    }

    updateStat(user: User) {
      let stat = this.af.database.object("/statistics/" + user.statisticKey);
      let sub = stat.subscribe(data => {
          let date = new Date();
          switch(date.getDay()) {
            case 1: 
              if(date.getHours() < 12) {
                  stat.update({MonMorning: data.MonMorning + 1});
              } else {
                  stat.update({MonAfternoon: data.MonAfternoon + 1});
              }
              break;
            case 2: 
              if(date.getHours() < 12) {
                  stat.update({TueMorning: data.TueMorning + 1});
              } else {
                  stat.update({TueAfternoon: data.TueAfternoon + 1});
              }
              break;
            case 3: 
              if(date.getHours() < 12) {
                  stat.update({WedMorning: data.WedMorning + 1});
              } else {
                  stat.update({WedAfternoon: data.WedAfternoon + 1});
              }
              break;
            case 4: 
              if(date.getHours() < 12) {
                  stat.update({ThuMorning: data.ThuMorning + 1});
              } else {
                  stat.update({ThuAfternoon: data.ThuAfternoon + 1});
              }
              break;
            case 5: 
              if(date.getHours() < 12) {
                  stat.update({FrMorning: data.FrMorning + 1});
              } else {
                  stat.update({FrAfternoon: data.FrAfternoon + 1});
              }
              break;
          }
          sub.unsubscribe();
      }); 

    }

}
