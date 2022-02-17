import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public IsInvalid: boolean | undefined;
  public _regex: RegExp = new RegExp('([0-9]{5})-([0-9]{3})', 'g');
  public cepField: HTMLInputElement | undefined;

  ngOnInit(): void {
    this.IsInvalid = false;
  }

  public ValidCepField() {
    this.cepField = document.getElementById('cepField') as HTMLInputElement;
    this.cepField.value = this.cepField.value.replace(/(\d{5})(\d{3})/, function(regex, a, b) {
      return a+'-'+b;
    })
    if (!this._regex.test(this.cepField.value)) {
      this.IsInvalid = true;
      this.cepField.style.borderColor = "#FF8000";
    } else {
      this.IsInvalid = false;
      this.cepField.style.borderColor = "#5C6BC0";
    }
  }

  public ShowNotification(argument: boolean) {

  }

}
