import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent, AboutMeComponent,SkillsComponent, PortfolioProjectsComponent, ContactFormComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
