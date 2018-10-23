import { Input, Component } from '@angular/core';
 
@Component({
  selector: 'ngbd-alert-closeable',
  templateUrl: './alert-closeable.html',
  styleUrls: ["./alert-closeable.css"]
})
export class NgbdAlertCloseable {
  public isCollapsed = false; 

  constructor() { 
  }
 
}
