import { Component } from '@angular/core';
import { XyzLibService } from 'xyz-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abc-app';

  constructor(private xyzLibService: XyzLibService) {}

  runXyzService(text?: string) {
    this.xyzLibService.iLogThingsAndStuff(text)
  }
}
