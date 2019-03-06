import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  constructor(private mylogin:LoginService)
  {
    var value1 =this.mylogin.login('admin','123456');
    var value2 =this.mylogin.login('saif','123456');

    console.log(value2)


  }
}
