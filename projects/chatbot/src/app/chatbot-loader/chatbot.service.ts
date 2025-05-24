import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private static readonly ADA_DATA_HANDLE = 'gr-qa';
  private static readonly ADA_DATA_CLUSTER = 'maple';
  private static readonly ADA_SCRIPT_ID = '__ada';

  constructor() {}

  public async loadChatbot(): Promise<void> {
    console.log('Entering load chatbot...');
    await this.addAdaScriptTagToDocument();
    console.log('<script> tag added to document');
    await this.initChatbot();
    console.log('ADA chatbot initialized');
  }

  /**
   * Adds the ADA <script> tag to the Document head.
   */
  private async addAdaScriptTagToDocument(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.id = ChatbotService.ADA_SCRIPT_ID;
      script.src = 'https://static.ada.support/embed2.js';
      script.async = true;
      script.setAttribute('data-handle', ChatbotService.ADA_DATA_HANDLE);
      script.setAttribute('data-lazy', 'true');
      script.onload = () => resolve();
      script.onerror = () =>
        reject(
          new Error(
            `Failed to load ADA script for handle: ${ChatbotService.ADA_DATA_HANDLE}`
          )
        );
      document.head.appendChild(script);
    });
  }

  /**
   * Initializes the ADA chatbot.
   */
  private async initChatbot(): Promise<void> {
    await (window as any).adaEmbed.start({
      handle: ChatbotService.ADA_DATA_HANDLE,
      cluster: ChatbotService.ADA_DATA_CLUSTER
    });
  }
}
