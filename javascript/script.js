document.addEventListener('DOMContentLoaded', function () {

    //NEWSLETTER PART
    let subscribeForm = document.getElementsByClassName("subscribe-form")[0];
    subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Subscription successful");
    });


    //Filter in explore

    const searchBar = document.querySelector('.search-explore input');
    searchBar.addEventListener('keyup', function (e) {
        const term = e.target.value.toLowerCase();
        const projectBlocks = document.querySelectorAll('.project-block');

        Array.from(projectBlocks).forEach(function (project) {
            const projectName = project.querySelector('.project-name').textContent.toLowerCase();
            const stackUsed = project.querySelector('.stack').textContent.toLowerCase();

            console.log(projectName);
            console.log(stackUsed);

            if (projectName.includes(term) || stackUsed.includes(term)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });


    //SIGN IN AND SIGN UP FUNCTIONS
    let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");


    signupBtn.onclick = function () {
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    };

    signinBtn.onclick = function () {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    };

    // Add event listener for sign-in button
    signinBtn.addEventListener("click", handleSignIn);
    function handleSignIn(e) {
        e.preventDefault();
        // Get the email and password input values
        let email = document.querySelector("#nameField input").value;
        let password = document.querySelector("input[type='password']").value;

        // Check if the email and password are entered
        if (email && password) {
            alert("Sign in successful");
        } else {
            alert("Please enter your email and password");
        }
    }

    // Add event listener for sign-up button
    signupBtn.addEventListener("click", handleSignUp);
    function handleSignUp(e) {
        e.preventDefault();
        let name = document.querySelector("#nameField input").value;
        let email = document.querySelector("input[type='email']").value;
        let password = document.querySelector("input[type='password']").value;

        // Check if all fields are entered
        if (name && email && password) {
            alert("Registration successful. Please check your email.");
        } else {
            alert("Please enter all the required fields");
        }
    }

    //ADD PROJECTS

    let forms = document.forms;
    // Add event listener for the "Add Project" button
    let addForm = forms['project-form'];
    addForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Get input values
        let projectName = document.getElementById("project-name-input").value;
        let projectDescription = document.getElementById("project-description-input").value;
        let projectTech = document.getElementById("project-tech-input").value;
        let projectInProgress = document.getElementById("project-in-progress-input").checked;

        // Create project HTML elements
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        let projectNameHeading = document.createElement("h3");
        projectNameHeading.textContent = projectName;

        let projectDescriptionPara = document.createElement("p");
        projectDescriptionPara.textContent = projectDescription;

        let projectTechPara = document.createElement("p");
        projectTechPara.textContent = "Stack: " + projectTech;

        // Append project HTML elements to the project div
        projectDiv.appendChild(projectNameHeading);
        projectDiv.appendChild(projectDescriptionPara);
        projectDiv.appendChild(projectTechPara);

        // Get the project list based on in-progress or completed status
        let projectList = projectInProgress
            ? document.querySelector(".projects-section .project-list:last-child")
            : document.querySelector(".projects-section .project-list:first-child");

        // Add the new project to the project list
        projectList.appendChild(projectDiv);

        // Check if "In Progress" checkbox is checked
        if (projectInProgress) {
            let stackRequiredInput = document.getElementById("stack-required-input").value;
            let stackRequiredPara = document.createElement("p");
            stackRequiredPara.textContent = "Stack Required: " + stackRequiredInput;
            projectDiv.appendChild(stackRequiredPara);
            // Clear stack required input value
            document.getElementById("stack-required-input").value = "";
        }

        // Clear input values
        document.getElementById("project-name-input").value = "";
        document.getElementById("project-description-input").value = "";
        document.getElementById("project-tech-input").value = "";
        document.getElementById("project-in-progress-input").checked = false;
    });

    // Add event listener for the "In Progress" checkbox
    let inProgressCheckbox = document.getElementById("project-in-progress-input");
    inProgressCheckbox.addEventListener("change", function () {
        let stackRequiredDiv = document.getElementById("stack-required");
        stackRequiredDiv.style.display = this.checked ? "block" : "none";
    });





})