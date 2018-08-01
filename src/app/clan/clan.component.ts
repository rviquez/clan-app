import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClanService } from '../services/clan.service';

@Component({
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClanComponent implements OnInit {
  id: string;
  clans: any[];
  searchWord: string;
  constructor(private route: ActivatedRoute, private router: Router, private service: ClanService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    //console.log(this.id);
    if (this.id) {
      this.getClanData(true, this.id);
    }
  }

  search(word) {
    let check = /[^CGJLPQRUVY0289]/gi;
    //console.log(this.id);

    this.getClanData(!check.test(word), word);
  }

  getClanData(tag, searchWord) {
    let apiUrl: string = tag ? searchWord : 'search/' + searchWord;

    this.service.getSpecific(apiUrl)
      .subscribe(clans => clans.length > 1 ? this.clans = clans : this.clans = [clans]);
  }
}
