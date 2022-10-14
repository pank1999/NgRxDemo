import {createAction, props} from "@ngrx/store";
import { User } from "./user.interface";

export const Create = createAction('[User Component] create', props<{user:User}>());
export const Update = createAction('[User Component] update');
export const Delete = createAction('[User Component] delete');
