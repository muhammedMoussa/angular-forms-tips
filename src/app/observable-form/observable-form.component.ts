import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../models';
import {StateService} from '../state.service';

@Component({
  selector: 'app-observable-form',
  templateUrl: './observable-form.component.html',
  styles: []
})
export class ObservableFormComponent implements OnInit {
  userData$: Observable<IUser>;
  languages = [];

  ngOnInit(): void {
    this.userData$ = this.stateService.getUserData();

    this.languages = [
      {id: 1, name: "Rust"},
      {id: 2, name: "Julia"},
      {id: 3, name: "Typescript"}
    ]
}

  onSubmit = () => {
    let data: any; 
    this.userData$.subscribe(user => data = user);
    console.log(data);
}

  onReset = () => {
    this.stateService.resetUserData();
}

  constructor(private stateService: StateService) {}
}
