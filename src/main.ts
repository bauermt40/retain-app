import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import { MainComponent } from './app/containers';
import { AppBarComponent, NoteCardComponent, NotesContainerComponent } from './app/ui';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AppBarComponent,
        NoteCardComponent,
        NotesContainerComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);