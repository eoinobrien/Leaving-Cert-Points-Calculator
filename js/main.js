var BOXES = [
{
  "name"            : "English",
  "shorthand"       : "eng",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"           : "Higher",
  "grade"           : "A1"
},
{
  "name"            : "Irish",
  "shorthand"       : "irish",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"           : "Higher",
  "grade"           : "A1"
},
{
  "name"            : "Mathematics",
  "shorthand"       : "maths",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"           : "Higher",
  "grade"           : "A1"
},
{
  "name"            : "",
  "shorthand"       : "",
  "possibleLevels" : [],
  "level"           : "",
  "grade"           : ""
},
{
  "name"            : "",
  "shorthand"       : "",
  "possibleLevels" : [],
  "level"           : "",
  "grade"           : ""
},
{
  "name"            : "",
  "shorthand"       : "",
  "possibleLevels" : [],
  "level"           : "",
  "grade"           : ""
},
{
  "name"            : "",
  "shorthand"       : "",
  "possibleLevels" : [],
  "level"           : "",
  "grade"           : ""
}
];
var SUBJECTS = [
{
  "name"      : "Accounting",
  "shorthand" : "accounting",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Agricultural Economics",
  "shorthand" : "agri-economics",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Agricultural Science",
  "shorthand" : "agri-sci",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Ancient Greek",
  "shorthand" : "a-greek",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Applied Mathematics",
  "shorthand" : "applied-maths",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Arabic",
  "shorthand" : "arabic",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Art",
  "shorthand" : "art",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Biology",
  "shorthand" : "biology",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Bulgarian",
  "shorthand" : "bulgarian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Business",
  "shorthand" : "bus",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Chemistry",
  "shorthand" : "chem",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Classical Studies",
  "shorthand" : "classical",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Construction Studies",
  "shorthand" : "construction",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Croatian",
  "shorthand" : "croatian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Czech",
  "shorthand" : "czech",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Danish",
  "shorthand" : "danish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Design and Communication Graphics",
  "shorthand" : "dcg",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Dutch",
  "shorthand" : "dutch",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Economics",
  "shorthand" : "economics",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Engineering",
  "shorthand" : "engineering",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "English",
  "shorthand" : "eng",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : true
},
{
  "name"      : "Estonian",
  "shorthand" : "estonian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Finnish",
  "shorthand" : "finnish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "French",
  "shorthand" : "french",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Geography",
  "shorthand" : "geo",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "German",
  "shorthand" : "german",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Hebrew Studies",
  "shorthand" : "hebrew",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "History",
  "shorthand" : "history-1",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "History",
  "shorthand" : "history-2",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Home Economics, Scientific and Social",
  "shorthand" : "home-ec",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Hungarian",
  "shorthand" : "hungarian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Irish",
  "shorthand" : "irish",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : true
},
{
  "name"      : "Italian",
  "shorthand" : "ita",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Japanese",
  "shorthand" : "japanese",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Latin",
  "shorthand" : "latin",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Latvian",
  "shorthand" : "latvian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Link Modules",
  "shorthand" : "link",
  "possibleLevels" : ["Common"],
  "level"     : "Common",
  "grade"     : "Distinction",
  "default"   : false
},
{
  "name"      : "Lithuanian",
  "shorthand" : "lithuanian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Mathematics",
  "shorthand" : "maths",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : true
},
{
  "name"      : "Modern Greek",
  "shorthand" : "m-greek",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Music",
  "shorthand" : "music",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Physics",
  "shorthand" : "physics",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Physics and Chemistry",
  "shorthand" : "physics-chem",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Polish",
  "shorthand" : "polish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Portuguese",
  "shorthand" : "portuguese",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Religious Education",
  "shorthand" : "religion",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Romanian",
  "shorthand" : "romanian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Russian",
  "shorthand" : "russian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Slovakian",
  "shorthand" : "slovakian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Spanish",
  "shorthand" : "spanish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Swedish",
  "shorthand" : "swedish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Technology",
  "shorthand" : "technology",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "Higher",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"            : "",
  "shorthand"       : "",
  "possibleLevels" : [],
  "level"           : "",
  "grade"           : "",
  "default"   : false
}
];
var GRADES = [
  {
    "name"   : "Higher",
    "weight" : [
      { "name"  : "A1",     "value" : 100},
      { "name"  : "A2",     "value" : 90 },
      { "name"  : "B1",     "value" : 85 },
      { "name"  : "B2",     "value" : 80 },
      { "name"  : "B3",     "value" : 75 },
      { "name"  : "C1",     "value" : 70 },
      { "name"  : "C2",     "value" : 65 },
      { "name"  : "C3",     "value" : 60 },
      { "name"  : "D1",     "value" : 55 },
      { "name"  : "D2",     "value" : 50 },
      { "name"  : "D3",     "value" : 45 },
      { "name"  : "E, F, NG", "value" : 0  }
    ]
  },
  {
    "name"   : "Ordinary",
    "weight" : [
      { "name"  : "A1",     "value" : 60 },
      { "name"  : "A2",     "value" : 50 },
      { "name"  : "B1",     "value" : 45 },
      { "name"  : "B2",     "value" : 40 },
      { "name"  : "B3",     "value" : 35 },
      { "name"  : "C1",     "value" : 30 },
      { "name"  : "C2",     "value" : 25 },
      { "name"  : "C3",     "value" : 20 },
      { "name"  : "D1",     "value" : 15 },
      { "name"  : "D2",     "value" : 10 },
      { "name"  : "D3",     "value" : 5  },
      { "name"  : "E, F, NG", "value" : 0  }
    ]
  },
  {
    "name"   : "Foundation",
    "weight" : [
      { "name"  : "A1",     "value" : 20 },
      { "name"  : "A2",     "value" : 15 },
      { "name"  : "B1",     "value" : 10 },
      { "name"  : "B2",     "value" : 5  },
      { "name"  : "E, F, NG", "value" : 0  }
    ]
  },
  {
    "name"   : "Common",
    "weight" : [
      { "name"  : "Distinction", "value" : 70 },
      { "name"  : "Merit",       "value" : 50 },
      { "name"  : "Pass",        "value" : 30 },
      { "name"  : "Fail",        "value" : 0  }
    ]
  }
];


function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
function searchGetIndex(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return i;
    }
  }
}
function getMark(level, grade){ //check through grades and return appropriate mark
  for (var i=0; i < GRADES.length; i++) {
    if (GRADES[i].name === level) {
      for (var j=0; j < GRADES[i].weight.length; j++) {
        if (GRADES[i].weight[j].name === grade) {
          return GRADES[i].weight[j].value;
        }
      }
    }
  }
}
function sortInt(a,b) {
    return b - a;
}
addPoints = function(boxesList) {
  var sum = 0;
  var marks = [];
  angular.forEach(boxesList, function(box) {
    if(box.name != ""){
      var thisMark = getMark(box.level, box.grade);
      if( box.name === "Mathematics" && box.level === "Higher" ) thisMark += 25;
      marks.push(thisMark);
    }
  });

  marks.sort(sortInt);

  var sum = 0;
  for (var i = 0; i < marks.length && i < 6; i++) {
    sum += marks[i];
  };
  return sum;
};

var lcpoints = angular.module('lcpoints', ['ngAria']);

lcpoints.controller('PointsController', ['$scope', '$filter', function($scope, $filter) {
  var boxesList = [];
  var boxesJSON = BOXES;
  var subjectsList = [];
  var subjectsJSON = SUBJECTS;
  var gradesList = GRADES;

  /*if(supports_html5_storage()){
    boxesList = JSON.parse(localStorage.getItem("boxesList"));
    subjectsList = JSON.parse(localStorage.getItem("subjectsList"));
    if(boxesList === null || subjectsList === null || boxesList === [] || subjectsList === []){
      boxesList = $filter('orderBy')(boxesJSON,"id");
      subjectsList = $filter('orderBy')(subjectsJSON,"name");
      localStorage.setItem("boxesList",JSON.stringify(boxesList));
      localStorage.setItem("subjectsList",JSON.stringify(subjectsList));
    }
  }else{*/
    boxesList = $filter('orderBy')(boxesJSON,"id");
    subjectsList = $filter('orderBy')(subjectsJSON,"name");
  //}

  $scope.boxes     = boxesList;
  $scope.subjects  = subjectsList;
  $scope.grades    = gradesList;
  $scope.points    = 0;
  $scope.points    = addPoints(boxesList);

  $scope.addBox = function (){
    boxesList.push({
      "name"            : "",
      "shorthand"       : "",
      "possibleLevels" : [],
      "level"           : "",
      "grade"           : ""
    });
    $scope.boxes = boxesList;
  };
  $scope.updateSubject = function(index){
    var updated = boxesList[index];
    var updateName = updated.name;
    var subIndex = searchGetIndex(updateName, subjectsList);

    updated.shorthand = subjectsList[subIndex].shorthand;
    updated.possibleLevels = subjectsList[subIndex].possibleLevels;
    updated.level = subjectsList[subIndex].level;
    updated.grade = subjectsList[subIndex].grade;

    boxesList[index] = updated;
    $scope.boxes     = boxesList;
    $scope.points    = addPoints(boxesList);
    if(supports_html5_storage()){
      localStorage.setItem("boxesList",JSON.stringify(boxesList));
      localStorage.setItem("subjectsList",JSON.stringify(subjectsList));
      console.log("Updated localStorage");
    }
  };
  $scope.updateLevel = function(index){
    var updated = boxesList[index];
    var updateName = updated.name;
    var subIndex = searchGetIndex(updateName, subjectsList);

    subjectsList[subIndex].level = updated.level;
    updated.grade = subjectsList[subIndex].grade;

    boxesList[index] = updated;
    $scope.boxes     = boxesList;
    $scope.points    = addPoints(boxesList);
    if(supports_html5_storage()){
      localStorage.setItem("boxesList",JSON.stringify(boxesList));
      localStorage.setItem("subjectsList",JSON.stringify(subjectsList));
      console.log("Updated localStorage");
    }
  };
  $scope.updateGrade = function(index){
    var updated = boxesList[index];
    var updateName = updated.name;
    var subIndex = searchGetIndex(updateName, subjectsList);

    subjectsList[subIndex].grade = updated.grade;

    boxesList[index] = updated;
    $scope.boxes     = boxesList;
    $scope.points    = addPoints(boxesList);
    if(supports_html5_storage()){
      localStorage.setItem("boxesList",JSON.stringify(boxesList));
      localStorage.setItem("subjectsList",JSON.stringify(subjectsList));
      console.log("Updated localStorage");
    }
  };
}]);