import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input() linkUrl;
  @Output() sendingFormValues = new EventEmitter();

  isOpen: boolean;
  currentType: string;
  isSamePassword: string;

  // Password Strength
  account = {
    password: <string>null
  };

  strength: any;
  barLabel: string = "Password strength:";
  myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];


  constructor() {
    this.isOpen = true;
    this.currentType = 'password';
  }

  passwordFunction(passpassword: any) {
    this.isSamePassword = passpassword.value;
  }

  toggleEye() {
    this.isOpen = !this.isOpen;

    if (!this.isOpen) {
      this.currentType = 'text';
    } else {
      this.currentType = 'password';
    }
  }

  strengthChanged(strength: number) {
    this.strength = strength;
  }

  submit(f: any) {
    // console.log(f.value);
    this.sendingFormValues.emit(f.value);
  }

  ngOnInit() {
  }

}
