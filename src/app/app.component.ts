import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  SignUp= new signup();
}


class signup{
  name!:string
  mobile!:Number
  email!:any
  password!:any

}
