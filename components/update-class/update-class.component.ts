import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassService } from 'src/app/services/class.service';
import { ActivatedRoute } from '@angular/router';
//declare var $: any;
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {
  updateForm=new FormGroup({
    name:new FormControl('',Validators.required),
    floor:new FormControl('',Validators.required),
    maxSize:new FormControl('',Validators.required),
    currentSize:new FormControl('',Validators.required),
})


















id:number;
myClass:Class;
  constructor(private _class:ClassService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    // $('.messagesuccess').css({'font-size': '150%'}).fadeIn(3000).fadeOut(5000)
   this.id= this._route.snapshot.params['id'];
   this._class.detailsClass(this.id).subscribe(
    data=>this.myClass=data,
    err=>console.log(err)
   )
  }

  updateClass(){
          this._class.updateClass(this.id,this.myClass).subscribe(
            data=>{this.myClass=data;
              $(document).ready(() => {
                $('.messagesuccess').css({'font-size': '150%'}).fadeIn(3000).fadeOut(5000)
                //$('.messagesuccess').fadeIn(3000)
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
            
          )}

            }