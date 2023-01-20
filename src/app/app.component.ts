import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('mainCard', {static: true}) mainCard!: ElementRef;
  @ViewChild('leftCard', {static: true}) leftCard!: ElementRef;
  @ViewChild('rightCard', {static: true}) rightCard!: ElementRef;

  private images = ['land', 'mountain', 'sea'];
  forwardAnimation = false;
  backwardsAnimation = false;

  ngOnInit(): void {
    this.swopImages();
  }

  backwards() {
    const firstElement = this.images.shift();
    this.images = [...this.images, firstElement!];
    this.backwardsAnimation = true;
    setTimeout(() => {
      this.backwardsAnimation = false;
      this.swopImages();
    }, 1000);
  }

  forward() {
    const lastElement = this.images.pop();
    this.images = [lastElement!, ...this.images];
    this.forwardAnimation = true;
    setTimeout(() => {
      this.forwardAnimation = false;
      this.swopImages();
    }, 1000);
  }

  private swopImages() {
    this.mainCard.nativeElement.style.backgroundImage = `url("../assets/${this.images[1]}.jpg")`;
    this.leftCard.nativeElement.style.backgroundImage = `url("../assets/${this.images[0]}.jpg")`;
    this.rightCard.nativeElement.style.backgroundImage = `url("../assets/${this.images[2]}.jpg")`;
  }
}
