import { Component, OnInit } from '@angular/core';
import { ChatbotService } from './chatbot.service';

@Component({
  selector: 'chatbot-loader',
  standalone: false,
  templateUrl: './chatbot-loader.component.html',
  styles: [``]
})

export class ChatbotLoaderComponent implements OnInit {
  constructor(private readonly chatbotService: ChatbotService) {}

  ngOnInit(): void {
    this.chatbotService.loadChatbot().catch(error => {
      console.error('Error loading ADA chatbot:', error);
    });
  }
}
