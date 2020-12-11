import {Component, EventEmitter, Output} from '@angular/core'

@Component({
  selector: 'app-functional-form',
  templateUrl: './functional-form.component.html',
})

export class FunctionalFormComponent {
  @Output() submit = new EventEmitter<object>()
  @Output() reset = new EventEmitter<object>()

  name = ''
  age = null
  languageId = null
  active = false
  
  languages = [
    {id: 1, name: "Rust"},
    {id: 2, name: "Julia"},
    {id: 3, name: "Typescript"}
  ]

  onSubmit() {
    if(!this.isValid()) { return }

    const {name, age, languageId, active} = this
    const userData = {name, age, languageId, active}

    console.log(userData)
    this.submit.emit(userData)
  }

  onReset() {
    this.name = ''
    this.age = null
    this.languageId = null
    this.active = false
    this.reset.emit()
  }

  private isValid(): boolean {
    const {name, age, languageId, active} = this
    if(name && active) {
      return true
    } else {
      return false
    }
  }
}
