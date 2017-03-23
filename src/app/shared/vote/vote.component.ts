import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  @Input("votes")
  public votes: number = 0;

   @Output() 
   onVote: EventEmitter<any> = new EventEmitter<number>();

  constructor() { }

  upVote() {
    this.votes++;
    this.voted(1);
  }

  downVote() {
    this.votes--;
    this.voted(-1);
  }

  voted(vote: number) {
    this.onVote.emit(vote);
  }
}
