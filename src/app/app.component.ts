import { Component } from '@angular/core';
import { Point } from './entites/point';
import { TroisPoint } from './entites/TroisPoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TP1';
  constructor() {
    let p1 = new Point(0, 6);
    console.log(p1);
    let p2 = new Point(0, 12);
    console.log(p2);
    let p3 = new Point(6, 9);
    let tp = new TroisPoint(p1, p2, p3);

    if (tp.TesterAlignement()) console.log('Les trois points sont alignés');
    else console.log('Les trois points ne sont pas alignés');

    if (tp.estIsocele()) console.log('Le triangle est isocele');
    else console.log("Le triangle n'est pas isocele");

    console.log(p2);
    let dist = p1.calculerDistance(p2);
    console.log(
      'La distance entre ' +
        p1.affcherPoint() +
        ' et ' +
        p2.affcherPoint() +
        ' est ' +
        dist
    );
    let mil = p1.calculerMilieu(p2);
    console.log(
      'Le point au milieu de ' +
        p1.affcherPoint() +
        ' et ' +
        p2.affcherPoint() +
        ' est ' +
        mil.affcherPoint()
    );
  }
}
