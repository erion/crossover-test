import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

//fake http while has no WS
import { InMemoryWebApiModule } from './vendors/in-memory-web-api-master';
import { InMemoryDataService } from './services/in-memory-data.service';

//ng2 imports
import { ProgressbarModule } from 'ng2-bootstrap/progressbar'

//my code
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LocalService } from './services/local.service';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { ProgressBarDynamicComponent } from './ng2-components/progress-bar-dinamyc/progress-bar-dinamyc.component';
import { UcfirstPipe } from './custom-pipes/ucfirst.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProgressBarDynamicComponent,
    UcfirstPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProgressbarModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ LocalService, {provide: APP_BASE_HREF, useValue : '/' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
