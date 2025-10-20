import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnChanges{ 

  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      console.log('ngOnChanges');
      const inputValues = changes[inputName];
      // Valor anterior, valor actual, conprueba si es el primer cambio.
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
