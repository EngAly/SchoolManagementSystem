import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassService } from 'src/app/services/class.service';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
//form validation

  addForm=new FormGroup({
  name:new FormControl('',Validators.required),
  floor:new FormControl('',Validators.required),
  maxSize:new FormControl('',Validators.required),
  currentSize:new FormControl('',Validators.required),
})







myClass=new  Class();
  constructor(private _http:ClassService) { }

  ngOnInit(): void {
  }
  addClass(){

    this._http.addClass(this.myClass).subscribe(
      data=>{
    
      $(document).ready(() => {
        $('.messagesuccess').css({'font-size': '150%'}).fadeIn(3000).fadeOut(5000)

        //   $('.message').fadeIn('fast')
      // }, 1000) 

      })
    }
      ,
      err=> $(document).ready(() => {
        $('.messageerror').css({'font-size': '150%'}).fadeIn(3000).fadeOut(5000)

        //   $('.message').fadeIn('fast')
      // }, 1000) 

      })
    )
    
  }
  

}
