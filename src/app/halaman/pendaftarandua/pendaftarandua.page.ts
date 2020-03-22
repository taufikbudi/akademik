import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendaftarandua',
  templateUrl: './pendaftarandua.page.html',
  styleUrls: ['./pendaftarandua.page.scss'],
})
export class PendaftaranduaPage implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  kedashboard(){
    this.router.navigateByUrl('/dashboard');
  }
  dashboard(){

  }
}
