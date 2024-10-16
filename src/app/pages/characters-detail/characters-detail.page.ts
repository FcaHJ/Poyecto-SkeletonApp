import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.page.html',
  styleUrls: ['./characters-detail.page.scss'],
})
export class CharactersDetailPage implements OnInit {

  characterId: string | null = 'sin parametro';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.characterId = this.route.snapshot.paramMap.get('id');
  }

}
