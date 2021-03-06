import React, { Component } from 'react';
import Question from './Question.jsx';

class QuestionList extends Component {
  constructor() {
    super();
    this.questionCount = 0;
    this.state = {
      questions: [
        {
          text: 'You\'re stuck behind an old couple slowly walking hand in hand on a small sidewalk on a busy street. How cranky does this make you?',
        },
      ],
      clientScore: 0,
    };
    this.createQuestion = this.createQuestion.bind(this);
    this.changeScore = this.changeScore.bind(this);
  }
  changeScore(values) {
    const clicked = values;
    const clientScore = this.state.clientScore;
    const total = (clientScore + clicked);
    this.setState({ clientScore: total });
  }
  componentDidUpdate() {
    const crankScore = this.state.clientScore;
    if (crankScore <= 3) {
      $('#userScore').text('bah humbug')
    } else if (crankScore > 3 && crankScore <= 4) {
      $('#userScore').text('hangry?')
    } else if (crankScore > 5 && crankScore <= 7) {
      $('#userScore').text('When you did not get the present you wanted.')
    } else if (crankScore > 8 && crankScore <= 10) {
      $('#userScore').text('the way star wars episode 1 - 3 made you feel')
    } else if (crankScore > 11 && crankScore <= 13) {
      $('#userScore').text('GAAAHHHHH!')
    } else {
      $('#userScore').text('Are you fuming?')
    }
    $('#crankStick').css({ transform: `rotate(${90 + ((crankScore * 12))}deg)` });

  }
  createQuestion() {
    if (this.questionCount === 0) {
      const questions = this.state.questions.concat({
        text: 'You\'re out to dinner and no one has come to take your order. They are actually so far away from you that you would have to get up an introduce yourself to the waiter. How cranky does this make you?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 1) {
      const questions = this.state.questions.concat({
        text: 'You\'re working out at the gym and someone is sitting at the machine you need and just texting. What\'s your crank rank?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 2) {
      const questions = this.state.questions.concat({
        text: 'You wake up in the morning and are really looking forward to that cup of coffee. You find that someone made it for you! When you take a sip you find it\'s your worst nightmare. The coffee is cold, burned and decaffeinated! How cranky are you?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else if (this.questionCount === 3) {
      const questions = this.state.questions.concat({
        text: 'You\'re trying to get off at your stop and no one will let you out. In fact a wave of new people get on the train despite your exclamations of "EXCUSE ME! GETTING OFF!" How cranky are you?',
      });
      this.setState({ questions });
      this.questionCount += 1;
    } else {
      // placeholder
    }
  }
  finalScore() {

  }
  render() {
    const questionElements = this.state.questions.map((question, idx) => {
      return (
        <Question
          handleSubmission={this.createQuestion}
          addScore={this.changeScore}
          key={idx}
          text={question.text}
          choices={question.choices}
        />
      );
    });
    return (
      <div>
      <div id="blankSpace"></div>
      <div id="question-list">
        {/* <p> Question List is rendering</p> */}
        {questionElements}
      </div>
      </div>
    );
  }
}

export default QuestionList;
