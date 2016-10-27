import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';



//services
import {AccountDAL} from '../shared/index'

/**
 *  This class represents the lazy loaded LoginComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  username = "";
  pwd = "";
  validationMessage = false;
  constructor(private account: AccountDAL, private router: Router) {
    if(this.account.getCurrentAccount() != null){
      this.router.navigate(['/dashboard/projects']);
    }
  }

  signIn() {
    this.account.signIn(this.username, this.pwd, (user: any)=>{
      this.router.navigate(['/dashboard/projects'])
    }, (user: any, err: any)=>{
      this.validationMessage = err.message;
    });
  }



}
