import { createReducer, on } from '@ngrx/store';
import { Create,Update,Delete } from './user.actions';
import { User } from './user.interface';

export const initialState:User = {
    username:'',
    email:'',
    address:'',
    password:''
};

export const userReducer = createReducer(
  initialState,
  on(Create, (state,user) => 
     state={
        username:user.user.username,
        email:user.user.email,
        address:user.user.address,
        password:user.user.password,
     } 
  ),

);