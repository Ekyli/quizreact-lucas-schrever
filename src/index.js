import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizSelect1 from "./quizSelect";
import QuestionBox from "./components/questionBox";

class QuizReact extends Component {

    state = {
        quizSelect1: []
    };
    getQuestionDatas = () => {
        quizSelect1().then(question => {
            this.setState({
                quizSelect1: question
            });
        });
    };

    componentDidMount() {
        this.getQuestionDatas();
    }

    render() {
        return (
            <div className="container">

                <div className="title"> Quiz en React </div>

                {this.state.quizSelect1.length > 0 &&
                 this.state.quizSelect1.map(
                     ({question, answers, correct, questionId}) => (
                         <QuestionBox question = {question} options = {answers} key = {questionId} />
                     )
                 )}

            </div>
        );
    }
}

ReactDOM.render(<QuizReact />, document.getElementById("root"));