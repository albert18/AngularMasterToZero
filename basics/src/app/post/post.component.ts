import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // @Input() postImageUrl = ''
  @Input('img') postImageUrl = ''

  @Output() imgSelected = new EventEmitter<string>()


  constructor() {
    console.log("contructor() called")
  }

  ngOnInit() {
    console.log("ngOnInit() Called")
  }


}
