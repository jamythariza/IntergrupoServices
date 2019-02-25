import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { CountriesModel} from 'src/app/services/countries-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private service: CountriesService, private modalService: NgbModal) { }
  name: string;
  currenciesName: string;
  languages: string;
  alpha3Code: string;
  srcImage: string;

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(reg: CountriesModel) {
    this.service.formData = Object.assign({}, reg);
  }

  open(name: any, currenciesName: any, alpha3Code: string, languages: string, modal) {

    this.name = name;
    this.currenciesName  = currenciesName;
    this.alpha3Code = alpha3Code;
    this.languages = languages;
    this.modalService.open(modal);
  }
  change(value: string) { this.alpha3Code = value; }
}
