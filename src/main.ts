import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import { MainComponent } from './app/containers';
import { 
    AppBarComponent, 
    NoteCardComponent, 
    NotesContainerComponent,
    NoteCreatorComponent } from './app/ui';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AppBarComponent,
        NoteCardComponent,
        NotesContainerComponent,
        NoteCreatorComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);