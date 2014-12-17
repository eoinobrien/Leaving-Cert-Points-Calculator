var BOXES = [
{
  "name"            : "English",
  "shorthand"       : "eng",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"           : "H",
  "grade"           : "A1"
},
{
  "name"            : "Irish",
  "shorthand"       : "irish",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"           : "H",
  "grade"           : "A1"
},
{
  "name"            : "Mathematics",
  "shorthand"       : "maths",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"           : "H",
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
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Agricultural Economics",
  "shorthand" : "agri-economics",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Agricultural Science",
  "shorthand" : "agri-sci",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Ancient Greek",
  "shorthand" : "a-greek",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Applied Mathematics",
  "shorthand" : "applied-maths",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Arabic",
  "shorthand" : "arabic",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Art",
  "shorthand" : "art",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Biology",
  "shorthand" : "biology",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Bulgarian",
  "shorthand" : "bulgarian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Business",
  "shorthand" : "bus",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Chemistry",
  "shorthand" : "chem",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Classical Studies",
  "shorthand" : "classical",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Construction Studies",
  "shorthand" : "construction",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Croatian",
  "shorthand" : "croatian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Czech",
  "shorthand" : "czech",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Danish",
  "shorthand" : "danish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Design and Communication Graphics",
  "shorthand" : "dcg",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Dutch",
  "shorthand" : "dutch",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Economics",
  "shorthand" : "economics",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Engineering",
  "shorthand" : "engineering",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "English",
  "shorthand" : "eng",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : true
},
{
  "name"      : "Estonian",
  "shorthand" : "estonian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Finnish",
  "shorthand" : "finnish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "French",
  "shorthand" : "french",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Geography",
  "shorthand" : "geo",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "German",
  "shorthand" : "german",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Hebrew Studies",
  "shorthand" : "hebrew",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "History",
  "shorthand" : "history-1",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "History",
  "shorthand" : "history-2",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Home Economics, Scientific and Social",
  "shorthand" : "home-ec",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Hungarian",
  "shorthand" : "hungarian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Irish",
  "shorthand" : "irish",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : true
},
{
  "name"      : "Italian",
  "shorthand" : "ita",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Japanese",
  "shorthand" : "japanese",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Latin",
  "shorthand" : "latin",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Latvian",
  "shorthand" : "latvian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Link Modules",
  "shorthand" : "link",
  "possibleLevels" : ["Common"],
  "level"     : "C",
  "grade"     : "Distinction",
  "default"   : false
},
{
  "name"      : "Lithuanian",
  "shorthand" : "lithuanian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Mathematics",
  "shorthand" : "maths",
  "possibleLevels" : ["Higher", "Ordinary", "Foundation"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : true
},
{
  "name"      : "Modern Greek",
  "shorthand" : "m-greek",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Music",
  "shorthand" : "music",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Physics",
  "shorthand" : "physics",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Physics and Chemistry",
  "shorthand" : "physics-chem",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Polish",
  "shorthand" : "polish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Portuguese",
  "shorthand" : "portuguese",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Religious Education",
  "shorthand" : "religion",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Romanian",
  "shorthand" : "romanian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Russian",
  "shorthand" : "russian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Slovakian",
  "shorthand" : "slovakian",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Spanish",
  "shorthand" : "spanish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Swedish",
  "shorthand" : "swedish",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
},
{
  "name"      : "Technology",
  "shorthand" : "technology",
  "possibleLevels" : ["Higher", "Ordinary"],
  "level"     : "H",
  "grade"     : "A1",
  "default"   : false
}
];
var GRADES = [
{
  "name"   : "Higher",
  "inital" : "H",
  "weight" : [
  { "name"  : "A1", "value" : 100},
  { "name"  : "A2", "value" : 90 },
  { "name"  : "B1", "value" : 85 },
  { "name"  : "B2", "value" : 80 },
  { "name"  : "B3", "value" : 75 },
  { "name"  : "C1", "value" : 70 },
  { "name"  : "C2", "value" : 65 },
  { "name"  : "C3", "value" : 60 },
  { "name"  : "D1", "value" : 55 },
  { "name"  : "D2", "value" : 50 },
  { "name"  : "D3", "value" : 45 },
  { "name"  : "F",  "value" : 0  }
  ]
},
{
  "name"   : "Ordinary",
  "inital" : "O",
  "weight" : [
  { "name"  : "A1", "value" : 60 },
  { "name"  : "A2", "value" : 50 },
  { "name"  : "B1", "value" : 45 },
  { "name"  : "B2", "value" : 40 },
  { "name"  : "B3", "value" : 35 },
  { "name"  : "C1", "value" : 30 },
  { "name"  : "C2", "value" : 25 },
  { "name"  : "C3", "value" : 20 },
  { "name"  : "D1", "value" : 15 },
  { "name"  : "D2", "value" : 10 },
  { "name"  : "D3", "value" : 5  },
  { "name"  : "F",  "value" : 0  }
  ]
},
{
  "name"   : "Foundation",
  "inital" : "F",
  "weight" : [
  { "name"  : "A1", "value" : 20 },
  { "name"  : "A2", "value" : 15 },
  { "name"  : "B1", "value" : 10 },
  { "name"  : "B2", "value" : 5  },
  { "name"  : "F",  "value" : 0  }
  ]
},
{
  "name"   : "Common",
  "inital" : "C",
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


var lcpoints = angular.module('lcpoints', []);

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

  /*for (var i = 0; i < subjectsList.length; i++) {
    for(var j = 0; j < boxesList.length; j++){
      if(subjectsList[i].name === boxesList[j].name){
        subjectsList.splice(i,1);
      }
    }
  };*/

  $scope.boxes = boxesList;
  $scope.subjects = subjectsList;
  $scope.grades = gradesList;

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
}]);