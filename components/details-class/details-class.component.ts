import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-details-class',
  templateUrl: './details-class.component.html',
  styleUrls: ['./details-class.component.css']
})
export class DetailsClassComponent implements OnInit {

  id: number;
  myClass: Class;
  constructor(private _class:ClassService,private _activeroute:ActivatedRoute) { }

  ngOnInit(): void {
   this.id= this._activeroute.snapshot.params['id']
   this.detailsClass();
  }

  detailsClass(){
      this._class.detailsClass(this.id).subscribe(
      
        data=>{console.log(data);
        this.myClass=data;
        },
        err=>console.log(err)
        
            )
        
      }
  }