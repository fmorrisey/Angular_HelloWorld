import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { CoursesComponent } from './course/courses.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PostComponent } from './post/post.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    PostComponent,
    PanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService, AuthorService], // Dependency Injection
  bootstrap: [AppComponent],
})
export class AppModule {}
