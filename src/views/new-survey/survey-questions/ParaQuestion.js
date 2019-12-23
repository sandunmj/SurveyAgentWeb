import React, { useState, useContext } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { SurveyContext } from "../../../Providers/Survey";

const ParaQuestion = props => {

  const surveyState = useContext(SurveyContext);

  const questionsOld = props.questions;
  const index = props.id;

  const [questions, setQuestions] = useState(questionsOld);
  const [subQuestions, setSubQuestions] = useState(
    questions.filter(q => q.index == props.id)[0].subQuestions
  );

  const handleNewCat = () => {
    let qIndex = 1;

    if (subQuestions.length) {
      qIndex = subQuestions[subQuestions.length - 1].index + 1;
    }

    let subQuestionsDup = subQuestions.slice(0);
    subQuestionsDup.push({
      index: qIndex,
      weight: 1,
      question: ""
    });
    setSubQuestions(subQuestionsDup);

    let questionsDup = questions.slice(0);
    let indexDup = questionsDup.indexOf(
      questionsDup.filter(q => q.index == index)[0]
    );

    questionsDup[indexDup].subQuestions = subQuestionsDup;
    setQuestions(questionsDup);
    surveyState.actions.setQuestions(questions);
  };

  const handleWeightChange = (e) => {
    const subQuestionsDup = subQuestions.slice(0);
    const indexDup = subQuestionsDup.indexOf(
        subQuestionsDup.filter(q => q.index == Number(e.target.id))[0]
    );
    subQuestionsDup[indexDup].weight = Number(e.target.value);
    setSubQuestions(subQuestionsDup);

    let questionsDup = questions.slice(0);
    const indexDup2 = questionsDup.indexOf(
      questionsDup.filter(q => q.index == index)[0]
    );

    questionsDup[indexDup2].subQuestions = subQuestionsDup;
    setQuestions(questionsDup);
    surveyState.actions.setQuestions(questions);
    // console.log(questions);
  };

  const clikedDelete = (id) => {

    let subQuestionsDup = subQuestions.slice(0);
    const indexDup = subQuestionsDup.indexOf(
        subQuestionsDup.filter(q => q.index == Number(id))[0]
    );
    subQuestionsDup = subQuestionsDup.splice(indexDup,1);

    setSubQuestions(subQuestionsDup);

    let questionsDup = questions.slice(0);
    const indexDup2 = questionsDup.indexOf(
      questionsDup.filter(q => q.index == index)[0]
    );

    questionsDup[indexDup2].subQuestions = subQuestionsDup;
    setQuestions(questionsDup);
    surveyState.actions.setQuestions(questions);
    // console.log(questions);
  }

  const handleQuestionChange = (e) => {
    const subQuestionsDup = subQuestions.slice(0);
    const indexDup = subQuestionsDup.indexOf(
        subQuestionsDup.filter(q => q.index == Number(e.target.id))[0]
    );
    subQuestionsDup[indexDup].question = e.target.value;
    setSubQuestions(subQuestionsDup);

    let questionsDup = questions.slice(0);
    const indexDup2 = questionsDup.indexOf(
      questionsDup.filter(q => q.index == index)[0]
    );

    questionsDup[indexDup2].subQuestions = subQuestionsDup;
    setQuestions(questionsDup);
    surveyState.actions.setQuestions(questions);
    // console.log(questions); 
  }

  return (
    <div>
      {subQuestions.map(ques => (
        <Grid container spacing={3} justify="space-around" key={ques.index}>
          <Grid item xs={3}></Grid>
          <Grid item xs={7}>
            <TextField
              fullWidth
              required
              id={"" + ques.index}
              label="Sub Question"
              margin="dense"
              name="Sub Question"
              variant="outlined"
              onChange={handleQuestionChange}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              required
              id={"" + ques.index}
              label=""
              margin="dense"
              name="Sub Weight"
              variant="outlined"
              defaultValue={1}
              onChange={handleWeightChange}
            />
          </Grid>
          <Grid style={{ marginTop: 14 }} item xs={1}>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              onClick={() => clikedDelete(ques.index)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      ))}
      <Grid container spacing={3} justify="space-around">
        <Grid style={{ marginLeft: "30%" }} item xs={3}>
          <Button color="primary" variant="outlined" onClick={handleNewCat}>
            New
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ParaQuestion;
