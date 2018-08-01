import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clan-player-info',
  templateUrl: './clan-player-info.component.html',
  styleUrls: ['./clan-player-info.component.scss']
})
export class ClanPlayerInfoComponent implements OnInit {
  @Input() player: any;
  image: string;
  expand: boolean = false;

  constructor() { }

  ngOnInit() {
    //console.log(this.player);
    this.image = '../../assets/images/arenas/arena' + this.player.arena.arenaID + '.png';
  }

  isExpanded(){
    this.expand = !this.expand;
  }

  goToPlayer(tag) {
    console.log(tag);
  }
}
