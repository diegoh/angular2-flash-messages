import { Component, OnInit } from '@angular/core';
import { FlashMessage } from './flash-message';
import { FlashMessagesService } from './flash-messages.service';
import { FlashMessageInterface } from './flash-message.interface';

@Component({
  selector: 'flash-messages',
  template: `
      <div id="flashMessages" class="flash-messages {{classes}}">
          <div class="alert flash-message {{message.cssClass}}" *ngFor='let message of messages'>
              <p>{{message.text}}</p>
          </div> 
      </div>
  `
})
export class FlashMessagesComponent implements OnInit {
    private _defaults = {
        text: 'default message',
        cssClass: ''
    };

    text: string;
    messages: FlashMessageInterface[] = [];

    private _flashMessagesElement: any;

    constructor(private _flashMessagesService: FlashMessagesService) {
        this._flashMessagesService.show = this.show.bind(this);
    }

    ngOnInit() {
        this._flashMessagesElement = document.getElementById('flashMessages');
    }
    
    show(text?: string, cssClass?: string): void {
        let message = new FlashMessage(text, cssClass);
        this.messages.push(message);
        
        window.setTimeout(() => {
            this._remove(message);
        }, 2500);
    }

    private _remove(message: FlashMessageInterface) {
        this.messages = this.messages.filter(function(msg) {
          return msg.text !== message.text;
        });
    }
}
