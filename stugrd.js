// student Grade Calculator


function calculateGrade (student1marks,student1MaxMarks)

{
    let student1percentage = (student1marks/student1MaxMarks)*100;
    let student1Grade;

    if(student1percentage >= 90)
    {
       student1Grade = 'A';
    }

    else if(student1percentage >= 80)
    {
        student1Grade = 'B';
    }

    else if(student1percentage >=70)
    {
        student1Grade = 'C';
    }

    else if(student1percentage >=60)
    {
        stedent1Grade = 'D';
    }

    else{
        student1Grade = 'F';
    }

    console.log(student1Grade);
}

calculateGrade(90,100);
calculateGrade(80,100);
calculateGrade(70,100);
calculateGrade(40,100);
calculateGrade(30,100);