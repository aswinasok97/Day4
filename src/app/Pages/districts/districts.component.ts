import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent {
  constructor(private obj:HeroService,private router:Router){}
  districts = this.obj.getData();
  gotoHere(id:string){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }

  

}

