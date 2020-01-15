import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAdmin from './state/admin.reducer';
import { AdminEffects } from './state/admin.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AdminAppShellComponent } from './app-shell/app-shell.component';
import { HttpClientModule } from '@angular/common/http';

export const adminShellRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'brokers',
          loadChildren: () =>
            import('@idc/admin/brokers').then(m => m.BrokersModule),
        },
        {
          path: '',
          redirectTo: 'brokers',
          pathMatch: 'full',
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([AdminEffects]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature(fromAdmin.ADMIN_FEATURE_KEY, fromAdmin.reducer),
  ],
  declarations: [AdminAppShellComponent],
  exports: [AdminAppShellComponent],
})
export class AdminShellModule {}
