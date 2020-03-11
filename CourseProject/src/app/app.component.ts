import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CourseProject';
  loadedFeature = 'recipe';

  loadedFeatureText: string;
  
  onNavigate(feature:string){
    this.loadedFeature= feature;
  }

  onNavigate2(feature:string){
    this.loadedFeatureText = feature;
  }

}
