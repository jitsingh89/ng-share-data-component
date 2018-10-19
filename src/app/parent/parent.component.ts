import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';

import { ChildComponent } from '../child/child.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  parentMessage = "Hello jit this is from parent component using @Input";
  messageOutput : string;


  massageSibling : string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.massageSibling = message)
  }

  receiveMessage($event) {
    this.messageOutput = $event
  }


  //Child to Parent: Sharing Data via ViewChild
  /*ViewChild allows a one component to be injected into another,
   giving the parent access to its attributes and functions. 
   One caveat, however, is that child won’t be available until after 
    view has been initialized. This means we need to implement the 
    AfterViewInit lifecycle hook to receive the data from the child. */

  @ViewChild (ChildComponent) child;
  messageViewChild : string;

  ngAfterViewInit() {
    this.messageViewChild = this.child.childMessage;
  }


}
