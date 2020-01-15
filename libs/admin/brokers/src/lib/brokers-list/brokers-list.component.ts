import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BrokersFacade } from '../state/brokers.facade';
import { loadBrokers } from '../state/brokers.actions';

@Component({
  selector: 'idc-brokers-list',
  templateUrl: './brokers-list.component.html',
  styleUrls: ['./brokers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokersListComponent implements OnInit {
  constructor(public brokersFacade: BrokersFacade) {}

  ngOnInit() {
    this.brokersFacade.dispatch(loadBrokers());
  }
}
