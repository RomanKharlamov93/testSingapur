import {ModuleWithProviders, NgModule} from "@angular/core";
import {StorageProvider} from "./storage-provider";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {APIInterceptor} from "./api.interceptor";

@NgModule({
  providers: [
    StorageProvider,
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
})

export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule>{
    return {
      ngModule: CoreModule
    }
  }
}
