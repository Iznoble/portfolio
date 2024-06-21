import { Component, inject } from '@angular/core';
import { HeadlineComponent } from './headline/headline.component';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [HeadlineComponent, CommonModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
})
export class PortfolioProjectsComponent {

  projectArray = inject(ProjectsService);
  cover:string = 'project';
  info:string = 'hover-info';
  hide:string = 'd-none';

}
