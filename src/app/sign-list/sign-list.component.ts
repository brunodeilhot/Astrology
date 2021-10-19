import { Component, OnInit } from '@angular/core';
import { single } from 'rxjs/operators';


@Component({
  selector: 'app-sign-list',
  templateUrl: './sign-list.component.html',
  styleUrls: ['./sign-list.component.scss']
})
export class SignListComponent implements OnInit {

  signs = [
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius',
    'capricorn',
    'aquarius',
    'pisces'
  ];

  // active = {
  //   0: false,
  //   1: false,
  //   2: false,
  //   3: false,
  //   4: false,
  //   5: false,
  //   6: false,
  //   7: false,
  //   8: false,
  //   9: false,
  //   10: false,
  //   11: false
  // }

  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i: number): void{
    this.active = !this.active
  }

  // updateClass() {
  //   return {
  //     'show-sign': this.active,
  //     'hide-sign': !this.active
  //   }
  // }

}
