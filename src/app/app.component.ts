import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  width = 200;
  colors = [];
  height = 200;
  defaultColor = '#a0a0a0';
  color = 'rgb(255,0,0)'
  ngOnInit() {
    for (let i = 0; i < this.height; i++) {
      this.colors[i] = [];
      for (let j = 0; j < this.width; j++) {
        this.colors[i][j] = this.defaultColor;
      }
    }
  }


  changeColor(color: string, x: number, y: number) {
    this.colors[y][x] = this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

}
