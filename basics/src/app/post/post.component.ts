import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input() postImageUrl = ''
  @Input('img') postImageUrl = ''

  @Output() imgSelected = new EventEmitter<string>()


  constructor() {
    console.log("contructor() called")
  }

  ngOnInit() {
    console.log("ngOnInit() Called")
  }

  ngDoCheck() {
    console.log("ngDoCheck function")
  }

  ngOnChanges() {
    console.log("ngOnChanges function")
  }

  ngAfterContentInit(){

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  ngAfterViewChecked() {

  }

  ngOnDestroy() {

  }
}
