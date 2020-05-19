import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Tools
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";

// Providers
import { UserProvider } from '../providers/user/user';
import { PedidosProvider } from '../providers/pedidos/pedidos';

// Plugins

@NgModule({
    declarations: [MyApp],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
    ],
    bootstrap: [IonicApp],
    entryComponents: [MyApp],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        UserProvider,
        PedidosProvider,
    ],
})
export class AppModule {}
