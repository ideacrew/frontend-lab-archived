import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBrokers from './state/brokers.reducer';
import { BrokersEffects } from './state/brokers.effects';
import { BrokersListComponent } from './brokers-list/brokers-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BrokersListComponent },
    ]),
    StoreModule.forFeature(
      fromBrokers.BROKERS_FEATURE_KEY,
      fromBrokers.reducer
    ),
    CdkTableModule,
    EffectsModule.forFeature([BrokersEffects]),
    ReactiveFormsModule,
  ],
  declarations: [BrokersListComponent],
})
export class BrokersModule {}
