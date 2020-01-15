import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAdmin from './state/admin.reducer';
import { AdminEffects } from './state/admin.effects';
import { AdminFacade } from './state/admin.facade';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

export const adminShellRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([AdminEffects]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature(fromAdmin.ADMIN_FEATURE_KEY, fromAdmin.reducer)
  ],
  providers: [AdminFacade]
})
export class AdminShellModule {}
