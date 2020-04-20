import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;
users:User[];
b=false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=new User();
    this.getUsers();
  }
  getUsers()
  {
    this.userService.getUsers().subscribe(users => this.users = users);
    console.log(this.users);
  }
  connect() {
    for (const us of this.users) {
      if ((this.user.email === us.email) && (this.user.motdepasse === us.motdepasse)) {
      //  alert('ok');
      localStorage.setItem('id',us.id.toString());
      this.b=true;
      window.location.replace('');
    
      }
    }
    if(!this.b)
    {
      alert("verifier votre email ou mot de passe");
    }
  }
  save(): void {
    this.user.grade="client";
    console.log(this.user);

    this.userService.create(this.user as User).subscribe(user => { this.users.push(this.user); } );
    //window.location.replace('login');
  
  
  } 
}
