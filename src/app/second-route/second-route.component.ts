import { TestServiceService } from './../test-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.css']
})
export class SecondRouteComponent implements OnInit {

  constructor( private testService: TestServiceService) { }

  ngOnInit(): void {
  }

  onClick(){
      this.testService.test()
  }

}
