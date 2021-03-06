import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'albert guerrero!';
  imageUrl = 'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg'
  images = [
    'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg',
    'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg',
    'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: "Large"
  }
  blueClass = false
  fontSize = 16




  getName() {
    return this.name
  }

  changeImage(e: KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event)
  }
}
