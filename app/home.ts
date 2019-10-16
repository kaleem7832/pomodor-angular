import {Component} from '@angular/core';
import {TimerComponent} from './timer/timer.component';
import {Timer} from "./timer";


/** @title Simple form field */
@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class Home {
  running:boolean=false;
  brtime:boolean=false;
  x;
  time:Timer;
  wtime:Timer;
  btime:Timer;
  ngOnInit(){
    this.time={
    minutes:0,
    seconds:0
  };
    this.wtime={
    minutes:5,
    seconds:0
  };
   this.btime={
    minutes:2,
    seconds:0
  };
  this.time.minutes=this.wtime.minutes;
  }
  start(){
    this.running=true;

    if(this.brtime){
          this.time.minutes=this.btime.minutes;
      }else{
          this.time.minutes=this.wtime.minutes;
      }

    this.x=setInterval(()=>{
       if(this.time.seconds==1 && this.time.minutes==0){
         clearInterval(this.x);
         this.running=false;
         this.brtime=!this.brtime;
         this.start();
       }
       if(this.time.seconds == 0){
        this.time.minutes-=1;
        this.time.seconds=59;
        }else{
          this.time.seconds-=1;
        }
        
        
      
    },1000)
  }


   stop(){
     this.running=false;
     this.time.minutes=0;
     this.time.seconds=0;
     this.brtime=false;
     clearInterval(this.x);
   }
   increaseTime(t){
     if(t=="w"){
       this.wtime.minutes+=1;
     }
     if(t=="b"){
       this.btime.minutes+=1;
     }
   }
   decreaseTime(t){
     if(t=="w"){
       this.wtime.minutes-=1;
     }
     if(t=="b"){
       this.btime.minutes-=1;
     }
   }
  

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */