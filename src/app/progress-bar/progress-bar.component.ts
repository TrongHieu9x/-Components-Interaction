import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = this.get_random_color();
  // @Input() progressColor = '#4CAF50';
  @Input() progress = "";
  constructor() { }

  ngOnInit(): void {
    this.loading();
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = (+this.progress + 1).toString();
      if (this.progress == "100") {
        // console.log(this.progress)
        clearInterval(interval);
        this.progress = "0";
        this.progressColor = this.get_random_color()
        this.loading()
      }
      }, 10);
  }

  get_random_color()
  {
    var color = "";
    for(var i = 0; i < 3; i++) {
      var sub = Math.floor(Math.random() * 256).toString(16);
      color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
  }

}
