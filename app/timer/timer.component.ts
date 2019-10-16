import { Component, OnInit, Input } from '@angular/core';
import {Timer} from "../timer";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() timer:Timer;
  @Input() br:boolean;
  constructor() { }

  ngOnInit() {
  }

}