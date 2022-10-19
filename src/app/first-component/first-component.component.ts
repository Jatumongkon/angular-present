import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  @Input() count: number = 0;
  @Output() countChange  = new EventEmitter();

  ngOnInit(): void {
  }


  increase(){
    this.count = this.count +1;
    this.countChange.emit(this.count) ;
  }

  decrease(){
    this.count = this.count -1;
    this.countChange.emit(this.count)
  }

}
