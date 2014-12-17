var BOXES = [
  {
    "id" : 1,
    "subject" : "English",
    "level"   : "H",
    "grade"   : "A1"
  },
  {
    "id" : 2,
    "subject" : "Irish"
  },
  {
    "id" : 3,
    "subject" : "Maths"
  },
  {
    "id" : 4,
    "subject" : ""
  },
  {
    "id" : 5,
    "subject" : ""
  },
  {
    "id" : 6,
    "subject" : ""
  },
  {
    "id" : 7,
    "subject" : ""
  }
];
var SUBJECTS = [
  {
    "name" : "",
    "shorthand" : "empty",
    "possible-levels" : [],
    "level" : "",
    "grade" : "",
    "default" : false
  },
  {
    "name" : "Accounting",
    "shorthand" : "accounting",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Agricultural Economics",
    "shorthand" : "agri-economics",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Agricultural Science",
    "shorthand" : "agri-sci",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Ancient Greek",
    "shorthand" : "a-greek",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Applied Mathematics",
    "shorthand" : "applied-maths",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Arabic",
    "shorthand" : "arabic",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Art",
    "shorthand" : "art",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Biology",
    "shorthand" : "biology",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Bulgarian",
    "shorthand" : "bulgarian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Business",
    "shorthand" : "bus",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Chemistry",
    "shorthand" : "chem",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Classical Studies",
    "shorthand" : "classical",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Construction Studies",
    "shorthand" : "construction",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Croatian",
    "shorthand" : "croatian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Czech",
    "shorthand" : "czech",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Danish",
    "shorthand" : "danish",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Design and Communication Graphics",
    "shorthand" : "dcg",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Dutch",
    "shorthand" : "dutch",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Economics",
    "shorthand" : "economics",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Engineering",
    "shorthand" : "engineering",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "English",
    "shorthand" : "eng",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : true
  },
  {
    "name" : "Estonian",
    "shorthand" : "estonian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Finnish",
    "shorthand" : "finnish",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "French",
    "shorthand" : "french",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Geography",
    "shorthand" : "geo",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "German",
    "shorthand" : "german",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Hebrew Studies",
    "shorthand" : "hebrew",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "History",
    "shorthand" : "history-1",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "History",
    "shorthand" : "history-2",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Home Economics, Scientific and Social",
    "shorthand" : "home-ec",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Hungarian",
    "shorthand" : "hungarian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Irish",
    "shorthand" : "irish",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : true
  },
  {
    "name" : "Italian",
    "shorthand" : "ita",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Japanese",
    "shorthand" : "japanese",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Latin",
    "shorthand" : "latin",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Latvian",
    "shorthand" : "latvian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Link Modules",
    "shorthand" : "link",
    "possible-levels" : ["Common"],
    "level" : "C",
    "grade" : "Distinction",
    "default" : false
  },
  {
    "name" : "Lithuanian",
    "shorthand" : "lithuanian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Mathematics",
    "shorthand" : "maths",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : true
  },
  {
    "name" : "Modern Greek",
    "shorthand" : "m-greek",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Music",
    "shorthand" : "music",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Physics",
    "shorthand" : "physics",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Physics and Chemistry",
    "shorthand" : "physics-chem",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Polish",
    "shorthand" : "polish",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Portuguese",
    "shorthand" : "portuguese",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Religious Education",
    "shorthand" : "religion",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Romanian",
    "shorthand" : "romanian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Russian",
    "shorthand" : "russian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Slovakian",
    "shorthand" : "slovakian",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Spanish",
    "shorthand" : "spanish",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Swedish",
    "shorthand" : "swedish",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  },
  {
    "name" : "Technology",
    "shorthand" : "technology",
    "possible-levels" : ["Higher", "Ordinary"],
    "level" : "H",
    "grade" : "A1",
    "default" : false
  }
];
var GRADES = [
  {
    "name"   : "Higher",
    "inital" : "H",
    "weight" : {
      "A1" : 100,
      "A2" : 90,
      "B1" : 85,
      "B2" : 80,
      "B3" : 75,
      "C1" : 70,
      "C2" : 65,
      "C3" : 60,
      "D1" : 55,
      "D2" : 50,
      "D3" : 45,
      "F"  : 0
    }
  },
  {
    "name"   : "Ordinary",
    "inital" : "O",
    "weight" : {
      "A1" : 60,
      "A2" : 50,
      "B1" : 45,
      "B2" : 40,
      "B3" : 35,
      "C1" : 30,
      "C2" : 25,
      "C3" : 20,
      "D1" : 15,
      "D2" : 10,
      "D3" : 5,
      "F"  : 0
    }
  },
  {
    "name"   : "Foundation",
    "inital" : "F",
    "weight" : {
      "A1" : 20,
      "A2" : 15,
      "B1" : 10,
      "B2" : 5,
      "F"  : 0
    }
  },
  {
    "name"   : "Common",
    "inital" : "C",
    "weight" : {
      "Distinction" : 70,
      "Merit"       : 50,
      "Pass"        : 30,
      "Fail"        : 0
    }
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

  if(supports_html5_storage()){
    boxesList = JSON.parse(localStorage.getItem("boxesList"));
    subjectsList == JSON.parse(localStorage.getItem("subjectsList"));
    if(boxesList === null || subjectsList === null){
      boxesList = $filter('orderBy')(boxesJSON,"id");
      subjectsList == $filter('orderBy')(subjectsJSON,"title");
      localStorage.setItem("boxesList",JSON.stringify(boxesList));
      localStorage.setItem("subjectsList",JSON.stringify(subjectsList));
    }
  }else{
    boxesList = $filter('orderBy')(boxesJSON,"id");
    subjectsList = $filter('orderBy')(subjectsJSON,"name");
  }

  $scope.boxes = boxesList;
  $scope.subjects = subjectsList;
  $scope.grades = gradesList;

  $scope.resetList = function (){
    itemsList = [];
    JSONlist = DATA;
    console.log(DATA);
    itemsList = $filter('orderBy')(JSONlist,"title");
    console.log(DATA);
    if(supports_html5_storage()){
      localStorage.setItem("itemsList",JSON.stringify(itemsList));
    }
    $scope.items = itemsList;
  };
  $scope.filterAll = function() {
    $scope.items = itemsList;
    $scope.currentCat = "The List";
    $scope.isCategory = false;
  };
  $scope.filterByCategory = function(category) {
    $scope.currentCat = category;
    $scope.items = [];
    angular.forEach(itemsList, function(item) {
      if(item.category === category) $scope.items.push(item);
    });
    $scope.isCategory = true;
  };
  $scope.filterEssential = function() {
    $scope.items = essentialItems;
    $scope.currentCat = "Essentials";
    $scope.isCategory = false;
  };
  $scope.filterDone = function() {
    $scope.items = [];
    angular.forEach(itemsList, function(item) {
      if(item.done === true) $scope.items.push(item);
    });
    $scope.currentCat = "Completed";
    $scope.isCategory = false;
  };
  $scope.update = function() {
    if(supports_html5_storage()){
      localStorage.setItem("itemsList",JSON.stringify($scope.items));
    }
  };

}]);