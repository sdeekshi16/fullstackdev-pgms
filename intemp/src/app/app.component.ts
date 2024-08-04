import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> This is inline template example</h1>
  <div class="name">
  Employee Name:{{user.name}}
  </div>
  <div class="dept">
  Department:{{user.dept}}
  </div>
  <div class="place">
  Job Location:{{ user.place }}
  </div>`,
  styles: [`
  h1 {color:red;}
  .place {color:blue;}
  .name {color:green;}
  .dept{color:orange;}
  `]
})
export class AppComponent {
  title = 'intemp';
  user={place:"Hyderabad",
  name:"harry",dept:"sales"};
}
