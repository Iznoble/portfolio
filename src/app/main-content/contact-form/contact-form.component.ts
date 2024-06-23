import { Component } from '@angular/core';
import { ContactHeadlineComponent } from './contact-headline/contact-headline.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ContactHeadlineComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

}
