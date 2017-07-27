var coursoramaApp = angular.module("coursoramaApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

coursoramaApp.controller("MainCtrl", function ($scope, User, activeUser,Course,selectedCourse) {
    var fixedUser = {
        "id": "0",
        "firstName": "Sigal",
        "lastName": "Yaron",
        "phone": "0545723644",
        "city": "Holon",
        "email": "sigalyaron10@gmail.com",
        "password": "11111",
        "type": "teacher",
        "course": ""
    };
    var myUser = new User(fixedUser);
    console.log(JSON.stringify(myUser));
    console.log(activeUser.isLoggedIn());
    activeUser.login(myUser);
    console.log(JSON.stringify(activeUser.get()));
    console.log(activeUser.isLoggedIn());
    activeUser.logout();
    console.log(activeUser.isLoggedIn());

    var fixedCourse = {
           "name":"Monday Morning",
            "desc":"10:00-13:30",
            "students":["1"],
            "sessionsData": {
                            "1001":{"date":"23-10-2017","added":[], "removed":[]},
                            "1002":{"date":"30-10-2017","added":[], "removed":[]},
                            "1003":{"date":"06-11-2017","added":[], "removed":[]},
                            "1004":{"date":"13-11-2017","added":[], "removed":[]},
                            "1005":{"date":"20-11-2017","added":[], "removed":[]},
                            "1006":{"date":"27-11-2017","added":[], "removed":[]},
                            "1007":{"date":"04-12-2017","added":[], "removed":[]},
                            "1008":{"date":"11-12-2017","added":[], "removed":[]},
                            "1009":{"date":"18-12-2017","added":[], "removed":[]},
                            "1010":{"date":"25-12-2017","added":[], "removed":[]}
                            }
            }
    var course = new Course(fixedCourse);
    console.log(JSON.stringify(course));
});