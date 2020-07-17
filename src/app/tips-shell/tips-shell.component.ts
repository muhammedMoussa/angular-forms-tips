import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-shell',
  template: `
    <app-functional-form></app-functional-form>
    <app-observable-form></app-observable-form>
  `,
  styles: [
  ]
})
export class TipsShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
