import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizSelect1 from "./quizSelect";
import QuestionBox from "./components/questionBox";
import Result from "./components/result";

class QuizReact extends Component {

    state = {
        quizSelect1: [],
        score: 0,
        responses: 0,
    };
    getQuestionDatas = () => {
        quizSelect1().then(question => {
            this.setState({
                quizSelect1: question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {          // Comptabilisation pour score
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }    
        this.setState({
            responses: this.state.responses < 10 ? this.state.responses + 1 : 10
        });    
    };

    playAgain = () => {                 // Réinitialisation des variables score/nombre réponses
        this.getQuestionDatas();
        this.setState({
            score: 0,
            responses: 0
        })
    }

    componentDidMount() {
        this.getQuestionDatas();
    }

    render() {
        return (
            <div className="container">

                <div className="title"> Quiz en React </div>

                {this.state.quizSelect1.length > 0 &&
                 this.state.responses < 10 &&
                 this.state.quizSelect1.map(
                     ({question, answers, correct, /*questionId */}) => (
                         <QuestionBox 
                         question = {question}
                         options = {answers} 
                        //  key = {questionId}
                         selected = {answer => this.computeAnswer(answer, correct)} />
                     )
                 )}

                {this.state.responses === 10 ? 
                (<Result score={this.state.score} playAgain={this.playAgain} />)
                : null}                    

            </div>
        );
    }
}

ReactDOM.render(<QuizReact />, document.getElementById("root"));