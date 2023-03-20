import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  public weatherSearchForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private apixuService: ApixuService) {}
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues:any) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => console.log(data));
}

    console.log(formValues);
}
}
