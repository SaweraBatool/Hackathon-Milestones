var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertions
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var workexperienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var achievementsElement = document.getElementById('achievements');
    var languagesElement = document.getElementById('languages');
    if (nameElement && emailElement && phoneElement && addressElement && educationElement && workexperienceElement && skillsElement && achievementsElement && languagesElement) {
        // Collect input values
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var workexperience = workexperienceElement.value;
        var skills = skillsElement.value;
        var achievements = achievementsElement.value;
        var languages = languagesElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ".concat(name_1, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n            <p><b>Address:</b> ").concat(address, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Work Experience</h3>\n            <p>").concat(workexperience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n\n            <h3>Achievements</h3>\n            <p>").concat(achievements, "</p>\n\n            <h3>Languages</h3>\n            <p>").concat(languages, "</p>\n        ");
        // Update resume output element
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
