import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebSite';
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    
    ) {}

  ngOnInit(){
   this.showSuccess();
   this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Welcome to the first website', 'Log-In Succesfull!');
 
}

showSpinner(){
this.spinner.show();

setTimeout(() =>{

  this.spinner.hide();
}, 2000);
}


  
}



