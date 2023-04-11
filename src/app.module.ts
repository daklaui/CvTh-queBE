import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/cv.module';
import { SectorModule } from './sector/sector.module';
import { ProjectModule } from './project/project.module';

import { ActiviteModule } from './activite/activite.module';
import { SpokenLanguageModule } from './spoken-language/spoken-language.module';
import { PsychoTechicalProfileModule } from './psycho-techincal-profile/psycho-techical-profile.module';
import { CertificationModule } from './certification/certification.module';
import { EducationModule } from './education/education.module';
import { ProfessionalExperienceModule } from './professional-experience/professional-experience.module';
import { SkillModule } from './skill/skill.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activite } from './activite/entities/activite.entity';
import { Cv } from './cv/entities/cv.entity';
import { Certificate } from 'crypto';
import { Education } from './education/entities/education.entity';
import { ProfessionalExperience } from './professional-experience/entities/professional-experience.entity';
import { Project } from './project/entities/project.entity';
import { Sector } from './sector/entities/sector.entity';
import { Skill } from './skill/entities/skill.entity';
import { SpokenLanguage } from './spoken-language/entities/spoken-language.entity';
import { PsychoTechincalProfile } from './psycho-techincal-profile/entities/psycho-techincal-profile.entity';
import { Certification } from './certification/entities/certification.entity';
import { UserModule } from './user/user.module';
import { DepartementModule } from './departement/departement.module';
import { CollaborateurModule } from './collaborateur/collaborateur.module';
import { TeamLeadModule } from './team-lead/team-lead.module';
import { ResponsablePoleModule } from './responsable-pole/responsable-pole.module';
import { User } from './user/entities/user.entity';
import { Departement } from './departement/entities/departement.entity';
import { Collaborateur } from './collaborateur/entities/collaborateur.entity';
import { TeamLead } from './team-lead/entities/team-lead.entity';
import { ResponsablePole } from './responsable-pole/entities/responsable-pole.entity';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';










@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'cvTheque',
    entities: [Cv,Activite,Certification,Education,ProfessionalExperience,Project,
               PsychoTechincalProfile,Sector,Skill,SpokenLanguage,
              User,Departement,Collaborateur,TeamLead,ResponsablePole
            ],
    synchronize: true,
  }),
    
    CvModule, SkillModule, ProfessionalExperienceModule, EducationModule,
     CertificationModule, PsychoTechicalProfileModule, SpokenLanguageModule, 
     ActiviteModule, ProjectModule, SectorModule, UserModule, DepartementModule, 
     CollaborateurModule, TeamLeadModule, ResponsablePoleModule, AuthModule,],
     
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService,],
})
export class AppModule {}
