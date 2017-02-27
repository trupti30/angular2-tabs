import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input('tabIcon') icon: string;

}
