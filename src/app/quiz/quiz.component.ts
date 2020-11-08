import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizInfo:Quiz[];
  flag:boolean = false;
  save:boolean = false;
  correct:number = 0;
  incorrect:number = 0;
  msg:string="Show Questions";
  result:string = '';
  clicked = false;
  key:string;
  constructor(private QuizService:QuizService) { }

  ngOnInit(): void {
  }

  loadQuiz():void{
    this.flag = true;
    this.QuizService.loadQuizDetails().subscribe(data => this.quizInfo=data);
  }

  checkAnswers(userObj,q):void{
    if(q.Sno == 1){
      if(userObj.option1 == '' && userObj.option2 == '' && userObj.option3 == true && userObj.option4 == ''){this.correct++;}
    }
    if(q.Sno == 2){
      if(userObj.option1 == true && userObj.option2 == '' && userObj.option3 == '' && userObj.option4 == ''){this.correct++;}
    }
    if(q.Sno == 3){
      if(userObj.option1 == true && userObj.option2 == '' && userObj.option3 == '' && userObj.option4 == ''){this.correct++;}
    }
    if(q.Sno == 4){
      if(userObj.option1 == '' && userObj.option2 == true && userObj.option3 == '' && userObj.option4 == ''){this.correct++;}
    }
    if(q.Sno == 5){
      if(userObj.option1 == '' && userObj.option2 == '' && userObj.option3 == true && userObj.option4 == ''){this.correct++;}
    }
    if(q.Sno == 6){
      if(userObj.option1 == '' && userObj.option2 == '' && userObj.option3 == true && userObj.option4 == ''){this.correct++;}
    }
  }

  Results():void{
    this.result = '';
    this.key = '';
    this.incorrect = 6-this.correct;
    this.result+= "Correct Answers: "+this.correct+" Incorrect Answers: "+this.incorrect;
    this.key = "The answer key is 1.c 2.a 3.a 4.b 5.c 6.c"
  }
  

}

