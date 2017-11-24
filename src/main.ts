import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as tedb from "tedb";
import { Datastore, IDatastore, Cursor, Ioptions, IindexOptions,
 IupdateOptions, Index, IIndex, IStorageDriver, IRange, range,
 isEmpty, getDate, compareArray, rmObjDups, getPath, Base64,
 expandObj, compressObj, flatten, saveArrDups, getDups, rmArrDups} from "tedb";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
