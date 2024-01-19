import { Component } from '@angular/core';
// import { SkillComponent } from '../skill/skill.component';

import { Developper } from '../models/Developper.model';
import { Skill } from '../models/Skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrl: './developper.component.scss'
})
export class DevelopperComponent {

  skill1: Skill = new Skill("HTML", "logoSkill1", "Paris");
  skill2: Skill = new Skill("CSS", "logoSkill2", "Orleans");
  skill3: Skill = new Skill("TypeScript", "logoSkill3", "Lyon");


  myDev:Developper = new Developper("Robert", "Henry", 58, "Male", "Developper since 1985", [this.skill1,this.skill2,this.skill3]);
}
