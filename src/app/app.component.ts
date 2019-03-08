import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name:string="saifeddien"
last_name:string="ghouma"
email:string="saifeddine@yahoo.fr"
date_Ne:string="24/11/1992"
  title = 'firstApp';
  constructor(private mylogin:LoginService)
  {
    var value1 =this.mylogin.login('admin','123456');
    var value2 =this.mylogin.login('saif','123456');

    console.log(value2)


  }
}
