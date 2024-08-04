import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'extemp';
  user={name:"liam",dept:"aiml",course:"btech",fee:"1lakh"};
}
