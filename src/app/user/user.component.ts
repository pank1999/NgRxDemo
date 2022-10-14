import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Create } from '../store/user.actions';
import { User } from '../store/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private store: Store<{ user: User }>) {

     this.user$=this.store.select('user')   }

  ngOnInit(): void {
  }

  userForm=new FormGroup({
     username:new FormControl(''),
     email:new FormControl(''),
     address: new FormControl(''),
     password:new FormControl('')
  });
  userData!:any;
  user$!:Observable<User>;
  onSubmit(){
    this.userData= this.userForm.value;
    console.log(this.userData);
    this.store.dispatch(Create({user:this.userData}));

    window.localStorage.setItem('user',JSON.stringify(this.userData));
   

    
  }
  onClick(){
  }



}
