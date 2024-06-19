import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IconsAndScrollbarComponent } from './icons-and-scrollbar/icons-and-scrollbar.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent, IconsAndScrollbarComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
