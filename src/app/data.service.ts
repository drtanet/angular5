import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 






@Injectable()
export class DataService {


  private goals = new BehaviorSubject<any>(['I want to build a self-driving car',
   'I want to built my own Augular5 web app']); 

  goal = this.goals.asObservable(); 

  constructor() { }


  changeGoal(goal) { 

    this.goals.next(goal); 


  }

}
