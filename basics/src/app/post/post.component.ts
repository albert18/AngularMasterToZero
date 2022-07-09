import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  // @Input() postImageUrl = ''
  @Input('img') postImageUrl = ''

  @Output() imgSelected = new EventEmitter<string>()


}
