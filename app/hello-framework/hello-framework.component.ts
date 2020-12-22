import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello-framework',
  styleUrls: ['./hello-framework.component.scss'],
  templateUrl: './hello-framework.component.html',
})
export class HelloFrameworkComponent {
  @Input()
  name: string;
  @Input()
  version: number;
  @Output()
  readonly release: EventEmitter<void> = new EventEmitter();
}
