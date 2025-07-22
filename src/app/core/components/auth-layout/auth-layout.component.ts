import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderBottomComponent } from '../header-bottom/header-bottom.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-auth-layout',
  imports: [NavComponent,
       HeaderBottomComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
 
}
