import { Certification } from 'src/certification/entities/certification.entity';
import { Collaborateur } from 'src/collaborateur/entities/collaborateur.entity';
import { Education } from 'src/education/entities/education.entity';
import { ProfessionalExperience } from 'src/professional-experience/entities/professional-experience.entity';
import { Project } from 'src/project/entities/project.entity';
import { PsychoTechincalProfile } from 'src/psycho-techincal-profile/entities/psycho-techincal-profile.entity';
import { ResponsablePole } from 'src/responsable-pole/entities/responsable-pole.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { SpokenLanguage } from 'src/spoken-language/entities/spoken-language.entity';
import { TeamLead } from 'src/team-lead/entities/team-lead.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()

export class Cv {

    @PrimaryGeneratedColumn()
    Id_cv : number;
    
    @Column()
    Title : string;
    
    @Column()
    Description : string ;

    @Column()
    About: string;
    
    @Column()
    Job: string;

    @Column()
    Experience: string;
    
    @Column()
    Skills: string;
    
    @Column()
    Languages: string ;
    
    @Column()
    Certifications: string;
    
    @Column()
    PsychoTechnicalProfile: string ;
    
    @Column()
    Education: string;
    
    @Column()
    ProfessionalExperience: string;

 /*
Relation entre table Cv et table Skill
*/

    @ManyToMany(
        () => Skill, 
        skill => skill.cvs, //optional
        {cascade: true})
        @JoinTable({
          name: 'cv_skill',
          joinColumn: {
            name: 'Id_cv',
            referencedColumnName: 'Id_cv',
          },
          inverseJoinColumn: {
            name: 'Id_skill',
            referencedColumnName: 'Id_skill',
          },
        })
        skills?: Skill[];  

 /*
Relation entre table Cv et table ProfessionalExperience
*/

@ManyToMany(
  () => ProfessionalExperience ,
  professionalExperience => professionalExperience.cvs, //optional
  {cascade: true})
  @JoinTable({
    name: 'cv_experience ',
    joinColumn: {
      name: 'Id_cv',
      referencedColumnName: 'Id_cv',
    },
    inverseJoinColumn: {
      name: 'Id_experience',
      referencedColumnName: 'Id_experience',
    },
  })
  professionalExperiences?: ProfessionalExperience[];  

   /*
Relation entre table Cv et table Education
*/

@ManyToMany(
  () => Education ,
  education => education.cvs, //optional
  {cascade: true})
  @JoinTable({
    name: 'cv_education ',
    joinColumn: {
      name: 'Id_cv',
      referencedColumnName: 'Id_cv',
    },
    inverseJoinColumn: {
      name: 'Id_education',
      referencedColumnName: 'Id_education',
    },
  })
  educations?: Education[];  

 /*
Relation entre table Cv et table Certification
*/

@ManyToMany(
  () => Certification ,
  certification => certification.cvs, //optional
  {cascade: true})
  @JoinTable({
    name: 'cv_certification ',
    joinColumn: {
      name: 'Id_cv',
      referencedColumnName: 'Id_cv',
    },
    inverseJoinColumn: {
      name: 'Id_certification',
      referencedColumnName: 'Id_certification',
    },
  })
  certifications?: Certification[];  

/*
Relation entre table Cv et table PsychoTechincalProfile
*/

@ManyToMany(
  () => PsychoTechincalProfile ,
  psychotechincalprofile => psychotechincalprofile.cvs, //optional
  {cascade: true})
  @JoinTable({
    name: 'cv_psychotechincalprofile ',
    joinColumn: {
      name: 'Id_cv',
      referencedColumnName: 'Id_cv',
    },
    inverseJoinColumn: {
      name: 'Id_psychotechnicalprofile',
      referencedColumnName: 'Id_psychotechnicalprofile',
    },
  })
  psychotechincalprofiles?: PsychoTechincalProfile[];  


  /*
Relation entre table Cv et table SpokenLanguage
*/

@ManyToMany(
  () => SpokenLanguage ,
  spokenlanguage => spokenlanguage.cvs, //optional
  {cascade: true})
  @JoinTable({
    name: 'cv_spokenlanguage ',
    joinColumn: {
      name: 'Id_cv',
      referencedColumnName: 'Id_cv',
    },
    inverseJoinColumn: {
      name: 'Id_language',
      referencedColumnName: 'Id_language',
    },
  })
  spokenlanguages?: SpokenLanguage[];  

/*
Relation entre table Cv et table Project
*/

@ManyToMany(
  () => Project ,
  project => project.cvs, //optional
   {cascade: true})
  @JoinTable({
    name: 'cv_project ',
    joinColumn: {
      name: 'Id_cv',
      referencedColumnName: 'Id_cv',
    },
    inverseJoinColumn: {
      name: 'Id_project',
      referencedColumnName: 'Id_project',
    },
  })
  projects?: Project[];  

/*
*/
 
  @ManyToOne(() => Collaborateur, (collaborateur)=>collaborateur.cv, {cascade: true})
  @JoinColumn({
    name: "Id_Collaborateur",
    referencedColumnName: "Id_Collaborateur"
  })
  collaborateur: Collaborateur[];
  

  /*
  */
 
  @ManyToOne(() => TeamLead, (teamlead)=>teamlead.cv, {cascade: true})
  @JoinColumn({
    name: "Id_TeamLead",
    referencedColumnName: "Id_TeamLead"
  })
  teamlead: TeamLead[];



  /*
  */
 
  @ManyToOne(() => ResponsablePole, (responsablepole)=>responsablepole.cv, {cascade: true})
  @JoinColumn({
    name: "Id_ResponsablePole",
    referencedColumnName: "Id_ResponsablePole"
  })
  responsablepole: ResponsablePole[];
  


 

}
