var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertions
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var degreeElement = document.getElementById('degree');
    var institutionElement = document.getElementById('institution');
    var jobTitleElement = document.getElementById('jobTitle');
    var companyElement = document.getElementById('company');
    var skillsElement = document.getElementById('skills');
    var achievementsElement = document.getElementById('achievements');
    var languagesElement = document.getElementById('languages');
    if (nameElement && emailElement && phoneElement && addressElement && degreeElement && institutionElement &&
        jobTitleElement && companyElement && skillsElement && achievementsElement && languagesElement) {
        // Collect input values
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var degree = degreeElement.value;
        var institution = institutionElement.value;
        var jobTitle = jobTitleElement.value;
        var company = companyElement.value;
        var skills = skillsElement.value;
        var achievements = achievementsElement.value;
        var languages = languagesElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>address:</strong> ").concat(address, "</p>\n            <h3>Education</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institution:</strong> ").concat(institution, "</p>\n            <h3>Work Experience</h3>\n            <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n            <p><strong>Company:</strong> ").concat(company, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Achievements</h3>\n            <p>").concat(achievements, "</p>\n            <h3>Languages</h3>\n            <p>").concat(languages, "</p>\n        ");
        // Update resume output element
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
            // Check for another element, if necessary
            var otherElement = document.getElementById('otherElement');
            if (!otherElement) {
                console.error('The other element is also missing');
            }
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
