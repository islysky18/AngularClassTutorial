import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyCustomModule } from './my-custom/my-custom.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { ProductService } from './product.service';
import { MytestService } from './services/mytest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HighlightDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCustomModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService, MytestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
