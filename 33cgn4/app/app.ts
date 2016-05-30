import {ViewChild} from '@angular/core';
import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {NeueMeldungPage} from './pages/NeueMeldung/NeueMeldung';
import {ListPage} from './pages/list/list';
import {StartPage} from './pages/start/start';

@App({
    templateUrl: 'build/app.html',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage: any = NeueMeldungPage;
    pages: Array<{ title: string, component: any }>;

    constructor(
        private platform: Platform,
        private menu: MenuController
        ) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            { title: 'Start', component: StartPage },
            { title: 'Neue Meldung', component: NeueMeldungPage },
            { title: 'Deine Meldungen', component: ListPage }
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
     	console.log("Switching to"+page); 
     
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}
