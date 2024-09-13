document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertions
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const degreeElement = document.getElementById('degree') as HTMLInputElement;
    const institutionElement = document.getElementById('institution') as HTMLInputElement;
    const jobTitleElement = document.getElementById('jobTitle') as HTMLInputElement;
    const companyElement = document.getElementById('company') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const achievementsElement = document.getElementById('achievements') as HTMLInputElement;
    const languagesElement = document.getElementById('languages') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && addressElement && degreeElement && institutionElement &&
        jobTitleElement && companyElement && skillsElement && achievementsElement && languagesElement) {
        
        // Collect input values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const degree = degreeElement.value;
        const institution = institutionElement.value;
        const jobTitle = jobTitleElement.value;
        const company = companyElement.value;
        const skills = skillsElement.value;
        const achievements = achievementsElement.value;
        const languages = languagesElement.value;

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>address:</strong> ${address}</p>
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institution:</strong> ${institution}</p>
            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> ${jobTitle}</p>
            <p><strong>Company:</strong> ${company}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Achievements</h3>
            <p>${achievements}</p>
            <h3>Languages</h3>
            <p>${languages}</p>
        `;

        // Update resume output element
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) { 
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');

            // Check for another element, if necessary
            const otherElement = document.getElementById('otherElement');
            if (!otherElement) {
                console.error('The other element is also missing');
            }
        }
    } else {
        console.error('One or more input elements are missing');
    }
});


