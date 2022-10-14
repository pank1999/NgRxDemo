import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../store/user.interface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user$!:Observable<User>;
  localuser!:any;
  constructor(private store:Store<{ user: User }>) {
    this.user$= this.store.select('user');
     this.localuser= window.localStorage.getItem('user');
     this.localuser=JSON.parse(this.localuser);
   }
  ngOnInit(): void {
    
  }


}
