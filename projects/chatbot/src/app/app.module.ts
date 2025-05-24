import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { createCustomElement } from '@angular/elements';
import { ChatbotLoaderComponent } from './chatbot-loader/chatbot-loader.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [ChatbotLoaderComponent],
  providers: [],
})
export class AppModule {}
// export class AppModule implements DoBootstrap {
//   constructor(private readonly injector: Injector) {}

//   ngDoBootstrap() {
//     console.log('Bootstrapping chatbot-loader...');
//     const el = createCustomElement(ChatbotLoaderComponent, { injector: this.injector });
//     customElements.define('chatbot-loader', el);
//   }
// }