import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'progress-bar-dynamic',
  templateUrl: './progress-bar-dinamyc.component.html',
  styleUrls: ['./progress-bar-dinamyc.component.css'],
})

export class ProgressBarDynamicComponent {

  public showWarning: boolean;

  @Input()
  public max: number = 100;
  @Input()
  public dynamic: number;
  @Input()
  public type: string;
  @Input()
  public insideText: string;

  public constructor() {}
 
}