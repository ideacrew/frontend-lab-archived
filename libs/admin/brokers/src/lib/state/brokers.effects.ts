import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { BrokersApiService } from '../brokers-api.service';
import { loadBrokers, loadBrokersSuccess } from './brokers.actions';
import { BrokerFromAPI } from '../models';
import { BrokersEntity } from './brokers.models';

@Injectable()
export class BrokersEffects {
  loadBrokers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBrokers),
      switchMap(() =>
        this.brokersApiService.getBrokersList().pipe(
          map((brokers: BrokerFromAPI[]) => {
            const formattedBrokers: BrokersEntity[] = brokers.map(broker => ({
              id: broker._id,
              hbxId: broker.hbx_id,
              staffName: broker.staff_name,
              currentStatus: broker.current_status,
              writingAgency: broker.writing_agency,
              history: broker.history
            }));

            return loadBrokersSuccess({ brokers: formattedBrokers });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private brokersApiService: BrokersApiService
  ) {}
}
