import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import { User } from '../../model/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: User;
  
  constructor(private route: ActivatedRoute, private af: AngularFire) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadData(params['key']));
  }

  loadData(key: any) {
    this.af.database.object("/users/" + key).subscribe(user => {
      this.user = user;    
    });
  }
}
