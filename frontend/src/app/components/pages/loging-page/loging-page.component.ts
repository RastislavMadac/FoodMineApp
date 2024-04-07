import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loging-page',
  templateUrl: './loging-page.component.html',
  styleUrls: ['./loging-page.component.css']
})
export class LogingPageComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get fc() {
    return this.loginForm.controls
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    alert(`email:${this.fc.email}
    password:${this.fc.password.value}`)
  }
}
