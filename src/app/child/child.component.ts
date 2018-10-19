import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //Parent to Child: Sharing Data via Input
  //@Input() decorator to allow data to be passed via the template.
  @Input() messageInput: string;

  //Child to Parent: Sharing Data via Output() and EventEmitter
  /* Another way to share data is to emit data from the child, which can be listed to by the parent. This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.
  In the parent, we create a function to receive the message and set it equal to the message variable.
  In the child, we declare a messageEvent variable with the Output decorator and set it equal to a new event emitter. Then we create a function named sendMessage that calls emit on this event with the message we want to send. Lastly, we create a button to trigger this function.
  The parent can now subscribe to this messageEvent that’s outputted by the child component, then run the receive message function whenever this event occurs.*/
  @Output() messageEvent = new EventEmitter<string>();
  msgForParent = "Hello jit this is from child component using @Otput!"
  sendMessage() {
    this.messageEvent.emit(this.msgForParent)
  }


  massageSibling : string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.massageSibling = message)
  }

  childMessage = 'Hello jit this is from child component using @ViewChild:!';

}
