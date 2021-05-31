import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { CurrentQuestionComponent } from './components/current-question/current-question.component';
import { HistoryComponentComponent } from './components/history-component/history-component.component';
import { QuizDoneComponent } from './quiz-done/quiz-done.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CurrentQuestionComponent,
    HistoryComponentComponent,
    QuizDoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
