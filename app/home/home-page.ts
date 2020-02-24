import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Button } from 'tns-core-modules/ui/button';
import { HomeViewModel } from './home-view-model';

export function pageLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}