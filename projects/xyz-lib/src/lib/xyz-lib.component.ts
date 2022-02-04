import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-xyz-component-A',
  template: `
    <p>
      xyz-lib component A works!
    </p>
  `,
  styles: [
  ]
})
export class XyzLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
