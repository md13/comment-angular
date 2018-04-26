import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IComment } from '../comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('commentText') comm : ElementRef;
  comments : IComment[]=[];
  constructor() { }

  ngOnInit() {
  }

  reviwscount(c:IComment, n:HTMLInputElement){
    c.namberOfReviews++;
    c.star +=parseInt(n.value);
  }

  commentLike (C:IComment){
    C.like++;
  }
  commentDislike (C:IComment){
    C.dislike++;
  }

  addComment(){
    let c : IComment = {
      comment : this.comm.nativeElement.value,
      dislike: 0 ,
      like: 0 ,
      namberOfReviews: 0,
      star : 0
    }
    this.comments.push(c);
  }
}
