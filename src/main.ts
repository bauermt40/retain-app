import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent, providers } from './app';
import { MainComponent } from './app/containers';
import { 
    AppBarComponent, 
    NoteCardComponent, 
    NotesContainerComponent,
    NoteCreatorComponent,
    ColorPickerComponent } from './app/ui';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AppBarComponent,
        NoteCardComponent,
        NotesContainerComponent,
        NoteCreatorComponent,
        ColorPickerComponent
    ],
    providers,
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);