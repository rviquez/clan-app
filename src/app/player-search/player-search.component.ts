import { PlayerService } from './../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})
export class PlayerSearchComponent implements OnInit {
  id: string;
  player: any;
  chests: any;
  searchWord: string;
  image: string;

  constructor(private route: ActivatedRoute, private router: Router, private service: PlayerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getPlayerData(this.id);
    }
  }

  search(word) {
    this.getPlayerData(word.searchWord);
  }

  getPlayerData(searchWord) {
    this.service.getSpecific(searchWord)
      .subscribe(playerData => {
        this.player = playerData;
        this.image = '../../assets/images/arenas/arena' + this.player.arena.arenaID + '.png';
        this.service.getSpecific(this.player.tag + '/chests')
          .subscribe(chests => this.chests = chests );
      });
  }

}
