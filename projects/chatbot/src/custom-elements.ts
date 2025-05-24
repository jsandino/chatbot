import { createCustomElement } from '@angular/elements';
import { Injector, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ChatbotLoaderComponent } from '@app/chatbot-loader/chatbot-loader.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [],
  providers: [],
})
class ChatbotElementModule {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(ChatbotLoaderComponent, {
      injector: this.injector,
    });
    customElements.define('chatbot-loader', el);
  }
}

export function defineCustomElements() {
  platformBrowserDynamic()
    .bootstrapModule(ChatbotElementModule)
    .catch(err => console.error(err));
}
