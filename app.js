//Student Data:

let allStudents = {
  jordan: {
    name: "Jordan",
    grade: "",
    missingAssignments: "",
  },
  kyle: {
    name: "Kyle",
    grade: "",
    missingAssignments: "",
  },
  maxine: {
    name: "Maxine",
    grade: "",
    missingAssignments: "",
  },
  kadesha: {
    name: "Kadesha",
    grade: "",
    missingAssignments: "",
  },
};

let students = ["Jordan", "Kyle", "Maxine", "Kadesha"];

let body = document.querySelector("body");

//Iterate over the students array, which contains the names
//of all students. For each student, it performs
//the following actions...
const generateStudents = () => {
  Object.entries(allStudents).forEach(([key, student]) => {
    //Create Parent Container: A new div element (newParent) is created to serve
    //as a container for that student's information. This container
    //is assigned the class studentContainer.
    let newParent = document.createElement("div");
    newParent.setAttribute("class", "studentContainer");

    ///////////////////////////////////////////////////////
    //Create Name Parent, Name field, and name edit button:
    //Name Parent:
    let nameParent = document.createElement("div");
    nameParent.setAttribute("class", "nameContainer");
    //Name Field:
    let studentName = document.createElement("div");
    studentName.setAttribute("class", "namer");
    studentName.innerHTML = `Name: ${student.name}`;
    studentName.style.display = "inline";
    studentName.style.paddingRight = "10px";
    //Edit name button:
    let editNameButton = document.createElement("button");
    editNameButton.setAttribute("class", "namebtn");
    editNameButton.innerHTML = `Edit Name`;

    //Edit name button on click event listener:
    editNameButton.addEventListener("click", (e) => {
      let updatedName = prompt("New student name:", student.name);
      if (updatedName && updatedName.trim() !== "") {
        // Update the allStudents object with the new name
        allStudents[key] = { ...allStudents[key], name: updatedName };

        // Update the UI to reflect the change immediately
        studentName.innerHTML = `Name: ${updatedName}`;
      }
    });
    //////////////////////////////////////////////////////////

    //Create grade parent, grade field, and grade edit button
    //Grade Parent:
    let gradeParent = document.createElement("div");
    gradeParent.setAttribute("class", "gradeContainer");
    //Grade Field:
    let studentGrade = document.createElement("div");
    studentGrade.setAttribute("class", "grader");
    studentGrade.innerHTML = `Grade: ${student.grade || "00"}`;
    studentGrade.style.display = "inline";
    studentGrade.style.paddingRight = "10px";
    //Grade Edit Button:
    let editGradeButton = document.createElement("button");
    editGradeButton.setAttribute("class", "gradebtn");
    editGradeButton.innerHTML = `Edit Grade`;

    //Edit grade button on click event listener:
    editGradeButton.addEventListener("click", (e) => {
      let updatedGrade = prompt("New student grade:", student.grade);

      // Update the allStudents object with the new name
      allStudents[key] = { ...allStudents[key], grade: updatedGrade };

      // Update the UI to reflect the change immediately
      studentGrade.innerHTML = `Grade: ${updatedGrade}`;
    });
    ///////////////////////////////////////////////////////////////////

    //Create assignment parent, assignment field, and assignment edit button:
    //Assignment parent:
    let assignParent = document.createElement("div");
    assignParent.setAttribute("class", "assignContainer");
    //Assignment field:
    let studentAssign = document.createElement("div");
    studentAssign.setAttribute("class", "assign");
    studentAssign.innerHTML = `Assignment: ${
      student.missingAssignments || "n/a"
    }`;
    studentAssign.style.display = "inline";
    studentAssign.style.paddingRight = "10px";
    //Assignment Button:
    let editAssignButton = document.createElement("button");
    editAssignButton.setAttribute("class", "assignbtn");
    editAssignButton.innerHTML = `Edit Assignment`;

    //Edit name button on click event listener:
    editAssignButton.addEventListener("click", (e) => {
      let updatedAssign = prompt("New assignment:", student.missingAssignments);
      // Update the allStudents object with the new assignment
      allStudents[key] = {
        ...allStudents[key],
        missingAssignments: updatedAssign,
      };

      // Update the UI to reflect the change immediately
      studentAssign.innerHTML = `Assignment: ${updatedAssign}`;
    });

    // -------------------------------------------------------------
    //Appending Elements: Each of the created elements
    //(studentName, studentGrade, and studentAssign) is appended
    //to the newParent container.
    newParent.append(nameParent);
    nameParent.append(studentName, editNameButton);

    newParent.append(gradeParent);
    gradeParent.append(studentGrade, editGradeButton);

    newParent.append(assignParent);
    assignParent.append(studentAssign, editAssignButton);

    //The fully populated newParent container is then appended to the body of the document.
    body.append(newParent);
  });
};
