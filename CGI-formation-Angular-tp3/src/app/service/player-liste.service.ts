import { Injectable } from '@angular/core';
import { Player } from 'src/model/player.model';
import { Team } from 'src/model/team.model';

import playersJson from '@data/players.json';
import teamsJson from '@data/teams.json';

@Injectable({
  providedIn: 'root'
})
export class PlayerListeService {

  private players: Player[] = playersJson.players;
  private teams: Team[] = teamsJson.teams;

  constructor() { }

  getPlayers(){
    return this.players;
  }

  getTeams(){
    return this.teams;
  }

  getPlayerById(id: number){
    return this.players.find((d) => d.id == id );
  }

  getTeamsById(id: number){
    return this.teams.find((t) => t.id == id );
  }

}
