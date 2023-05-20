import { TextFormatDirective } from './text-format.directive';
import {ElementRef} from "@angular/core";

describe('TextFormatDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('input')
    };
    const directive = new TextFormatDirective(mockElementRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
