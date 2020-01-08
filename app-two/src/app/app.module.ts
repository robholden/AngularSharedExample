import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { DevModeInterceptor } from '@lib/dev-mode.interceptor';
import { INJECTOR_ENV } from '@lib/env.interface';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [
        { provide: INJECTOR_ENV, useValue: environment },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DevModeInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
