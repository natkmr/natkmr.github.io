import { Component, OnInit } from '@angular/core';
import {Question, QuestionsListJson} from "./models/questionsListJson";
import QuestionList from './json/questions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'natkmr';
  json: QuestionsListJson = QuestionList;
  currentQuestion: Question = {id:"", question:"", answer:"", images:[]};

  showResponseBtn: boolean = true;
  showResponse: boolean = false;
  showResponseImages: boolean = false;

  index: number = 0;
  nbQuestions: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentQuestion = this.json.questionList[this.index];
    this.nbQuestions = this.json.questionList.length;
  }

  showResponseBtnClick(){
    this.showResponseBtn = false;
    this.showResponse = true;
    this.showResponseImages = true;
  }
  backBtnClick(){
    this.showResponseBtn = true;
    this.showResponse = false;
    this.showResponseImages = false;
    this.index = this.mod(this.index-1, this.nbQuestions);
    this.currentQuestion = this.json.questionList[this.index];
  }
  forwardBtnClick(){
    this.showResponseBtn = true;
    this.showResponse = false;
    this.showResponseImages = false;
    this.index = this.mod(this.index+1, this.nbQuestions);
    this.currentQuestion = this.json.questionList[this.index];
  }
  mod(n:number, m:number) {
    return ((n % m) + m) % m;
  }
}
