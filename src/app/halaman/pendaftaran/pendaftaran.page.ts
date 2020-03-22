import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendaftaran',
  templateUrl: './pendaftaran.page.html',
  styleUrls: ['./pendaftaran.page.scss'],
})
export class PendaftaranPage implements OnInit {
  
    public form = [
        { val: 'Pepperoni', isChecked: true },
        { val: 'Sausage', isChecked: false },
        { val: 'Mushroom', isChecked: false }
      ];
      constructor(private router: Router) { }

  ngOnInit() {
  }
  lanjutpendaftarandua(){
  
    this.router.navigateByUrl('/pendaftarandua');
  }
    pendaftarandua(){

    }
  }

