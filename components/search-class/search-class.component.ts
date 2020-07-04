import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { Class } from 'src/app/models/class';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-class',
  templateUrl: './search-class.component.html',
  styleUrls: ['./search-class.component.css']
})
export class SearchClassComponent implements OnInit {

  classes:Class[];
  searchKey:string;
  searchType:string;
  totalRecords:number;
  page:number=1;
  search(searchKey,searchType){
  this.searchKey=searchKey;
  this.searchType=searchType;
  this._class.searchClass(this.searchKey,this.searchType).subscribe(
    data=>{
      
           this.classes= data              
    },
    err=>console.log(err)
    //()=>
     // $('.messageerror').css({'font-size': '150%'}).fadeIn(3000).fadeOut(5000)
         
 )


}

deleteClass(id){
  this._class.deleteClass(id).subscribe(
    data=>{console.log('deleted successfully');
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



  constructor(private _class:ClassService,private _router:Router) { }

  ngOnInit(): void {
  }

}
