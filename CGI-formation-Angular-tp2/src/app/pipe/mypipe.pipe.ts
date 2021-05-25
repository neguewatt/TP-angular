import { Team } from './../../model/team.model.d';
import { Player } from './../../model/player.model.d';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(player: Player, teams: Team[]): Team {
    return teams.find((p) => p.id == player.teamId);
  }

}
