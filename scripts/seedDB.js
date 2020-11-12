let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactcms',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const projectSeed = [
  {
    title: "Employee Directory",
    author: "Y Waller",
    subtitle: "Sample Employee Directory application using React, API and Node/NPM",
    description:
      "Sample application that uses React, Node and NPM features to retrieve and display a table of employees on a User Database - this table can be searched by name and sorted by name and age",
    weblink: "https://github.com/vetty88/employee-directory",
    datelastupdated: "2020-11-09"
  },
  {
    title: "Business Page",
    author: "Y Waller",
    subtitle: "Web Design, creation, content updates and maintenance.",
    description:
      "My Equine Myofunctional therapy business 'Equusential Therapies",
      weblink: "https://vetty88.github.io/Equusential-Web-Page/",
      datelastupdated: "2020-08-23"
  },
  {
    title: "Scheduling Tool",
    author: "Y Waller",
    subtitle: "Daily Scheduling Tool. Web hosted. Daily activity Planner",
    description:
      "Interactive sheduling tool for every work day. Schedule, save, delete and clear your daily work tasks",
      weblink: "https://github.com/vetty88/WorkDay-Scheduler",
      datelastupdated: "2020-07-05"
  },
  {
    title: "Weather Forecast App",
    author: "Y Waller",
    subtitle: "Weather Forecast Application using APIs",
    description:
      "Web design, application and use of third party data from 'OpenWeather' API. Daily and weekly weather forecast for cities.",
      weblink: "https://github.com/vetty88/Weather-App",
      datelastupdated: "2020-07-18"
  }
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
