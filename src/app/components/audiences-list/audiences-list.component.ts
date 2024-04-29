import { Component, OnInit } from '@angular/core';
import { AudienceDataService } from '../../services/audience-data.service';
import { Audience } from '../../models/audience.model';
import { Group } from '../../models/group.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-audiences-list',
  standalone: true,
  templateUrl: './audiences-list.component.html',
  styleUrl: './audiences-list.component.css',
  imports: [
    CommonModule,
    FormsModule 
  ]
})
export class AudiencesListComponent implements OnInit {
  audiences: Audience[] = [];
  filteredAudiences: Audience[] = [];
  faculties: string[] = [];
  groups: Group[] = [];
  selectedFaculty?: string;
  selectedGroup?: Group;

  constructor(private audienceDataService: AudienceDataService) {}

  ngOnInit(): void {
    this.audiences = this.audienceDataService.getAudiences();
    this.updateFilteredAudiences();
    this.faculties = [...new Set(this.audiences.map(aud => aud.faculty))];
    this.groups = [
      new Group('Все группы', 0, ''), 
      new Group('Инженеры 1 курса', 30, 'Инженерный Факультет'),
      new Group('Инженеры 2 курса', 28, 'Инженерный Факультет'),
      new Group('Разработчики ПО', 25, 'Факультет Компьютерных Наук'),
      new Group('Аналитики данных', 20, 'Факультет Компьютерных Наук'),
      new Group('Теоретические математики', 15, 'Математический Факультет'),
      new Group('Прикладные математики', 18, 'Математический Факультет'),
      new Group('Экспериментальная физика', 12, 'Факультет Физики'),
      new Group('Теоретическая физика', 10, 'Факультет Физики'),
      new Group('Молекулярная биология', 18, 'Биологический Факультет'),
      new Group('Экология', 22, 'Биологический Факультет'),
      new Group('Философия науки', 20, 'Факультет Гуманитарных Наук'),
      new Group('Литературное творчество', 15, 'Факультет Гуманитарных Наук')
  ];
  this.selectedGroup = undefined;
  this.selectedFaculty = undefined;
  }

  updateFilteredAudiences() {
    let filteredAudiences = [...this.audiences];
    
    if (this.selectedFaculty) {
      filteredAudiences = filteredAudiences.filter(aud => aud.faculty === this.selectedFaculty);
    }
    
    if (this.selectedGroup && this.selectedGroup.name !== 'Все группы' && this.selectedGroup.size !== undefined && this.selectedGroup.faculty) {
      filteredAudiences = filteredAudiences.filter(aud => {
        return aud.capacity >= (this.selectedGroup?.size ?? 0) && aud.faculty === this.selectedGroup?.faculty;
      });
    }
    this.filteredAudiences = filteredAudiences;
  } 
  
  
  showAllAudiences() {
    this.selectedFaculty = undefined;
    this.selectedGroup = undefined;
    this.updateFilteredAudiences();
  }

  filterByFaculty(faculty: string | undefined) {
    this.selectedFaculty = faculty;
    this.updateFilteredAudiences();
  }
 
  sortByCapacity() {
    this.filteredAudiences = [...this.filteredAudiences].sort((a, b) => a.capacity - b.capacity);
  }

  sortByName() {
    this.filteredAudiences = [...this.filteredAudiences].sort((a, b) => a.name.localeCompare(b.name));
  }
  filterForGroup(group: Group | undefined) {
    if (group) {
      this.filteredAudiences = this.audiences?.filter(aud => aud.capacity >= group.size && aud.faculty === group.faculty);
      this.updateFilteredAudiences();
    }
  }
  
}
