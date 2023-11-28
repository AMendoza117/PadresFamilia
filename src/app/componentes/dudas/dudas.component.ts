import { Component, OnInit } from '@angular/core';
import { FaqService } from './../../services/faq.services';
import { FaqItem } from 'src/app/models/faq.model';

@Component({
  selector: 'app-dudas',
  templateUrl: './dudas.component.html',
  styleUrls: ['./dudas.component.css']
})
export class DudasComponent implements OnInit {

  faqList: FaqItem[] = [];
  filteredFaqs: FaqItem[] = [];

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqList = this.faqService.getFaqs();
    this.filteredFaqs = this.faqList;
  }

  search(term: string): void {
    if (!term) {
      this.filteredFaqs = this.faqList;
    } else {
      this.filteredFaqs = this.faqList.filter(
        (faq) =>
          faq.pregunta.toLowerCase().includes(term.toLowerCase()) ||
          faq.respuesta.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
