import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginObj:any={
      "email":"",
      "password":""
    }
    http=inject(HttpClient);
    router=inject(Router)
    //constructor(private http:HttpClient){}
    onLogin(){

      debugger;
        this.http.post("https://localhost:7221/api/EmployeeManagement/getLogin",this.loginObj).subscribe((res:any)=>{
          if(res.result){
            debugger;
            localStorage.setItem("employeeApp",JSON.stringify(res.data));
              this.router.navigateByUrl('/dashboard');
              alert(res.message);
            }
          else{
            alert(res.message);
          } 
        })
    }

}
