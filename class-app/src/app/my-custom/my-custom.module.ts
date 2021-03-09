import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [CommonModule, FormsModule],
  exports: [ChildComponent, ParentComponent],
})
export class MyCustomModule {}
