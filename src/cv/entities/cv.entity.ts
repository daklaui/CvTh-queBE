import { Certification } from 'src/certification/entities/certification.entity';
import { Education } from 'src/education/entities/education.entity';
import { ProfessionalExperience } from 'src/professional-experience/entities/professional-experience.entity';
import { Project } from 'src/project/entities/project.entity';
import { PsychoTechincalProfile } from 'src/psycho-techincal-profile/entities/psycho-techincal-profile.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { SpokenLanguage } from 'src/spoken-language/entities/spoken-language.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

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
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
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
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
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
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
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
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
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
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
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
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
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
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
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



  

}
