//Problem 1

function studentIntroduction(student) {
  if(typeof student !== "object" || student === null || Array.isArray(student)){
    return "Invalid";
  }else if(!student.name|| !student.age||!student.course){
    return "Invalid";
  }else{
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
  }
}

//Problem 2

function filterActiveUsers(users) {
    if(!Array.isArray(users)||users.length === 0||!users.every(users => "isActive" in users)){
      return "Invalid";
    }else{
      return users.filter(users => users.isActive === true)
    }
}


//problem 3

function countHashtags(caption) {
   if(typeof caption !== "string"){
    return "Invalid"
   }else{
   let words = caption.split(" ");
   let counthas = 0;
   let longteg = "";
   
   for(let word of words){
    if(word.startsWith("#")){
      counthas++;

      let tager  = word.slice(1);
      if(tager.length>longteg.length){
        longteg = tager;
      }
    }
   }
   return {
    hashtagCount:counthas, longestTag:longteg
   }
 }
}
//Problem 4

function bonusScore(scores) {
    if(!Array.isArray(scores)||scores.length === 0||scores.some(value=> typeof value !== "number")){
      return "Invalid";
    }else{
      let addintion = scores.map(number => number +10);
      let newscours = addintion.reduce((sum,number)=>sum+number,0)
      return newscours;
    }
}

//Problem 5

function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    if(students.some(student => typeof student !== "object"||student === null || !("name" in student)||!("score" in student)|| typeof student.score !=="number")){
      return "Invalid";
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}
