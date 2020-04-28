import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  @Input() pixelColor: string
  @Output() colorChange = new EventEmitter<string>();

  emitColor(color: string){
    this.colorChange.emit(color);
  }
}
