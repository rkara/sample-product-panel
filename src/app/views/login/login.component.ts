import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppAuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  invalid = false;

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  private subscription = new Subscription();

  constructor(private auth: AppAuthenticationService, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLoginButtonClick() {
    const formGroup = this.formGroup.getRawValue();
    this.invalid = false;
    this.subscription.add(
      this.auth
        .login$(formGroup.email, formGroup.password)
        .subscribe((success) => {
          if (success) {
            this.router.navigate(['/new-product']);
          } else {
            this.invalid = true;
          }
        })
    );
  }
}
