import { PlayerService } from './../services/player.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-chests',
  templateUrl: './player-chests.component.html',
  styleUrls: ['./player-chests.component.scss']
})
export class PlayerChestsComponent implements OnInit {
  @Input() playerId: any;
  chests: any;
  expand: boolean = false;

  constructor(private service: PlayerService) { }

  ngOnInit() {
    this.service.getSpecific(this.playerId + '/chests')
      .subscribe(chests => this.chests = chests);
  }

  isExpanded() {
    this.expand = !this.expand;
  }
}
