import { Injectable } from '@angular/core';
import { FlashMessage } from './flash-message';
import { FlashMessageInterface } from './flash-message.interface';

@Injectable()
export class FlashMessagesService {
    show: (text?: string, cssClass?: string) => void;
}
