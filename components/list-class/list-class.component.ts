import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { Observable } from 'rxjs';
import { Class } from 'src/app/models/class';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  totalRecords:number;
  page:number=1;


classes:Class[];
  constructor(private _class:ClassService,private _router:Router) { }

  ngOnInit(): void {
  this.getClasses();
  }

  getClasses(){
    this._class.getClasses().subscribe(
      data=> this.classes=data,
      err=>console.log(err)
      )}   

      deleteClass(id){
        this._class.deleteClass(id).subscribe(
          data=>{

              $('.messagesuccess').css({'font-size': '150%'}).fadeIn(3000).fadeOut(5000)
             

          this.getClasses();
        }
        ,
          err=>console.log(err)
        )
      } 

      detailsClass(id){
        
       
        this._router.navigate(['details-class',id]);
      }

      updateClass(id){
        this._router.navigate(['update-class',id]);
      }


      }
