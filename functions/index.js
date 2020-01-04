const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.addSurvey = functions.database.ref('/surveyList/{sId}')
    .onCreate((snapshot, context) => {
        const surveyId = context.params.sId;
        const path = admin.database().ref('dashboardAnalysis/' + surveyId);
        admin.database().ref("surveyList").once("value").then(
            snapshot => {
                const survey = snapshot.val()[surveyId];

                let a = {
                    allMembers: 0,
                    receivedResponse: 0,
                    divisions: [],
                    categories: [],
                    questions: []
                };

                // receivedResponse
                a.allMembers = survey.users.length;


                // division
                let divisions = [];
                survey.divisions.forEach(
                    div => {
                        let d = { division: "", totalMembers: 0, receivedResponse: 0, score: 0 };

                        d.totalMembers = survey.users.filter(usr => usr.division == div).length;
                        d.division = div.val;

                        divisions.push(d);

                    }
                )
                a.divisions = divisions;

                // category
                let cat = [];
                survey.categories.forEach(
                    prof => {
                        let c = { category: "", noOfQ: 0, totalResponses: 0, score: 0, division: [] };
                        c.category = prof.val

                        divisions.forEach(
                            div => {
                                let division = { division: "", numOfResponse: 0, score: 0 };
                                division.division = div.division;
                                c.division.push(division);
                            }
                        );
                        cat.push(c);
                    }
                );
                cat.forEach(
                    (c, i) => {
                        cat[i].noOfQ = survey.questions.filter(ques => ques.category == c.category).length;
                    }
                );
                a.categories = cat;

                // question
                let questions = [];
                survey.questions.forEach(
                    ques => {
                        let question = { index: 0, question: "", category: "", divisions: [] };
                        question.question = ques.question;
                        question.index = ques.index;
                        question.category = ques.category;

                        let divs = [];

                        divisions.forEach(
                            div => {
                                let division = { division: "", numOfResponse: 0, score: 0 };
                                division.division = div.division;
                                divs.push(division);
                            }
                        );
                        question.divisions = divs;

                        questions.push(question);

                    }
                );
                a.questions = questions;

                path.set(a);

                return null;

            }
        );

    })


exports.addAnswer = functions.database.ref('users/{uId}/answeredSurveys/{sId}')
.onCreate((snapshot, context)=>{
    const userId = context.params.uId;
    const surveyId = context.params.sId;
    const path = admin.database().ref('dashboardAnalysis/' + surveyId);
    admin.database().ref("users").once("value").then(
        snapshot => {
            const userList = snapshot.val();
            console.log(userList);
            console.log(surveyId);
            console.log(userId);
            const user = snapshot.val()[userId];
            console.log(user);
            
            let a = {
                allMembers: 0,
                receivedResponse: 0,
                divisions: [],
                categories: [],
                questions: []
            };
            
            userList.forEach(
                usr =>{
                    a.receivedResponse = user.answeredSurveys.filter(survey => survey==surveyId ).length;
            })

            console.log(a.receivedResponse);




        }
        );
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
