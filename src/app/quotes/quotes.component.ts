import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input("key")
  public userKey: string;

  quote: String;
  quotes: FirebaseListObservable<any>;

  quotesLength: number = -1;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    if(this.userKey) {
      this.quotes = this.af.database.list("/quotes/" + this.userKey);  
        
    }
  }

  addQuote() {
    if(this.quote) {
      this.quotes.push({date: Date.now(), text: this.quote, votes: 0});   
      this.quote = "";   
    }
  }

  getDate(time: any) {
    return new Date(time).toLocaleString();
  }

  voted(vote: number, quote: any) {
    quote.votes += vote;
    this.quotes.update(quote.$key, {votes: quote.votes});
  }
}
