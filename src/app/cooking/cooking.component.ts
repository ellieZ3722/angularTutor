import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']
})

export class CookingComponent {
  egg = false;
  rice = false;
  tomato = false;
  cheese = false;
  nori = false;
  fish = false;
  meat = false;
  sugar = false;
  dish: string;
  cookbutton = false;

  cook() {
    this.cookbutton = true;
    if (this.egg && this.tomato && !this.rice && !this.cheese && !this.nori && !this.fish && !this.meat && !this.sugar) {
      this.dish = '西红柿炒蛋！(๑•ㅂ•́)و✧';
    } else if (this.egg && !this.tomato && this.rice && !this.cheese && !this.nori && !this.fish && !this.meat && !this.sugar) {
      this.dish = '蛋炒饭！(๑•ㅂ•́)و✧';
    } else if (!this.egg && !this.tomato && this.rice && !this.cheese && this.nori && this.fish && !this.meat && !this.sugar) {
      this.dish = '寿司！(๑•ㅂ•́)و✧';
    } else if (!this.egg && !this.tomato && !this.rice && !this.cheese && !this.nori && !this.fish && this.meat && this.sugar) {
      this.dish = '糖醋排骨！(๑•ㅂ•́)و✧';
    } else if (this.egg && !this.tomato && this.rice && this.cheese && !this.nori && !this.fish && !this.meat && !this.sugar) {
      this.dish = '起司焗饭！(๑•ㅂ•́)و✧';
    } else {
      this.dish = '黑暗料理！！w(゜Д゜)w';
    }
    this.egg = false;
    this.rice = false;
    this.tomato = false;
    this.cheese = false;
    this.nori = false;
    this.fish = false;
    this.meat = false;
    this.sugar = false;
  }

  eggIn() {
    this.egg = true;
    this.cookbutton = false;
  }
  riceIn() {
    this.rice = true;
    this.cookbutton = false;
  }
  tomatoIn() {
    this.tomato = true;
    this.cookbutton = false;
  }
  cheeseIn() {
    this.cheese = true;
    this.cookbutton = false;
  }
  noriIn() {
    this.nori = true;
    this.cookbutton = false;
  }
  fishIn() {
    this.fish = true;
    this.cookbutton = false;
  }
  meatIn() {
    this.meat = true;
    this.cookbutton = false;
  }
  sugarIn() {
    this.sugar = true;
    this.cookbutton = false;
  }

}
