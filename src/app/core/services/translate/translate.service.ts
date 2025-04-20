import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  RendererFactory2,
  signal,
  WritableSignal,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateServices {
  private readonly renderer = inject(RendererFactory2).createRenderer(
    null,
    null
  );

  constructor(private translateService: TranslateService) {
    if (isPlatformBrowser(PLATFORM_ID)) {
      let saveLang: WritableSignal<string> = signal(
        localStorage.getItem('lang')!
      );

      this.translateService.setDefaultLang('en');
      if (saveLang()) {
        this.translateService.use('en');
      }
      this.diraction();
    }
  }

  diraction(): void {
    if (localStorage.getItem('lang') == 'en') {
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
      this.renderer.setAttribute(document.documentElement, 'lang', 'en');
    } else if (localStorage.getItem('lang') == 'ar') {
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
      this.renderer.setAttribute(document.documentElement, 'lang', 'ar');
    }
  }
}
