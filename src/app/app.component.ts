import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'team-app';
  newMember: string = '';
  members: string[] = [];
  teamDetails: string[] = [];
  inputError: string = '';
  teamDetailError: string = '';
  teamDetailsInput: string = '';

  addMember = () => {
    if (this.newMember.trim().length === 0) {
      this.inputError = 'Name is required!';
      return;
    }
    this.members.push(this.newMember);
    this.newMember = '';
  };

  addTeamDetails = () => {
    if (this.teamDetailsInput.trim().length === 0) {
      this.teamDetailError = 'Name is required!';
      return;
    }
    this.teamDetails.push(this.teamDetailsInput);
    this.teamDetailsInput = '';
  };

  addNameInput(value: string) {
    this.inputError = '';
    this.newMember = value;
  }

  setTeam(value: string) {
    this.teamDetailError = '';
    this.teamDetailsInput = value;
  }
}
