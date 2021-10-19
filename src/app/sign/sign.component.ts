import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SignService } from 'src/app/services/sign.service';
import { Sign } from '../models/sign-details';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  signs: Sign[] = [];

  date: string = '';
  name: string = '';


  constructor(private signService: SignService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.name = params.getAll('sign').toString();
      this.date = params.getAll('date').toString();
    });
    this.chosenSign(this.name, this.date)
  }

  chosenSign(sign: string, date: string): void {
    this.signService.getSign(sign, date).subscribe(res => {
      this.signs.push(res);
    })
  }

}