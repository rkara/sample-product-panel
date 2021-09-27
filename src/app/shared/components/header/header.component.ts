import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppAuthenticationService, AppUser } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()
  title = '';

  user$?: Observable<AppUser | undefined>;

  constructor(private auth: AppAuthenticationService) {}

  ngOnInit(): void {
    this.user$ = this.auth.user$;
  }
}
