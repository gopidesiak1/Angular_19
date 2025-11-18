import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

export default function bootstrap(ssrContext: any) {
  return bootstrapApplication(AppComponent, config, ssrContext);
}