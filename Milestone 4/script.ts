document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertions
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const workexperienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const achievementsElement = document.getElementById('achievements') as HTMLInputElement;
    const languagesElement = document.getElementById('languages') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && addressElement && educationElement && workexperienceElement && skillsElement && achievementsElement && languagesElement) {
        
        // Collect input values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const workexperience = workexperienceElement.value;
        const skills = skillsElement.value;
        const achievements = achievementsElement.value;
        const languages = languagesElement.value;

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Address:</b> ${address}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Work Experience</h3>
            <p>${workexperience}</p>

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
        }
    } else {
        console.error('One or more input elements are missing');
    }
});


