import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BrokersFacade } from '../state/brokers.facade';
import { loadBrokers } from '../state/brokers.actions';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { searchArray } from '@idc/shared/utils';
import { BrokersEntity } from '../state/brokers.models';
import { Observable, combineLatest } from 'rxjs';
import { map, tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'idc-brokers-list',
  templateUrl: './brokers-list.component.html',
  styleUrls: ['./brokers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokersListComponent implements OnInit {
  public displayedColumns: string[] = [
    'staffName',
    'hbxId',
    'currentStatus',
    'agency',
    'writingAgent',
  ];

  searchFormControl = new FormControl();
  dataSource$: Observable<any>;

  constructor(public brokersFacade: BrokersFacade) {}

  ngOnInit() {
    this.brokersFacade.dispatch(loadBrokers());

    this.dataSource$ = combineLatest([
      this.brokersFacade.allBrokers$,
      this.searchFormControl.valueChanges.pipe(startWith('')),
    ]).pipe(
      map(([brokers, searchTerm]: [BrokersEntity[], string]) => {
        return searchArray(brokers, searchTerm);
      })
    );
  }
}
