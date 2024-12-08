// Get references to the form and output container
var form = document.getElementById('resume-form');
var output = document.getElementById('resume-output');
// Helper function to make an element editable
function makeEditable(elementId) {
    var element = document.getElementById(elementId);
    if (!element) {
        console.error("Element with id \"".concat(elementId, "\" not found"));
        return;
    }
    element.addEventListener('click', function () {
        var originalText = element.innerText;
        // Create an input field
        var input = document.createElement('input');
        input.type = 'text';
        input.value = originalText;
        input.style.width = '100%';
        // Replace the element with the input field
        element.replaceWith(input);
        // Save changes on blur or Enter key
        input.addEventListener('blur', function () {
            element.innerText = input.value;
            input.replaceWith(element); // Replace input back with updated element
        });
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
        // Focus on the input field for immediate editing
        input.focus();
    });
}
// Attach editing functionality to each resume section
function makeResumeEditable() {
    makeEditable('name-display');
    makeEditable('email-display');
    makeEditable('education-display');
    makeEditable('experience-display');
    makeEditable('skills-display');
}
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from reloading the page
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate and display the resume HTML
    output.innerHTML = "\n    <h2 id=\"name-display\">".concat(name, "</h2>\n    <p id=\"email-display\"><strong>Email:</strong> ").concat(email, "</p>\n    <h3>Education</h3>\n    <p id=\"education-display\">").concat(education, "</p>\n    <h3>Work Experience</h3>\n    <p id=\"experience-display\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p id=\"skills-display\">").concat(skills, "</p>\n  ");
    // Make the generated resume editable
    makeResumeEditable();
});
//gap
// // Get form and output elements
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const output = document.getElementById('resume-output') as HTMLElement;
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form reload
//   // Get form values
//   const name = (document.getElementById('name') as HTMLInputElement).value;
//   const email = (document.getElementById('email') as HTMLInputElement).value;
//   const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//   const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//   const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
//   // Generate resume HTML
//   output.innerHTML = `
//     <h2>${name}</h2>
//     <p><strong>Email:</strong> ${email}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Work Experience</h3>
//     <p>${experience}</p>
//     <h3>Skills</h3>
//     <p>${skills}</p>
// <section id="resume-output">
//   <h2 id="name-display">John Doe</h2>
//   <p id="email-display"><strong>Email:</strong> john@example.com</p>
//   <h3>Education</h3>
//   <p id="education-display">Bachelor of Science in Computer Science</p>
//   <h3>Work Experience</h3>
//   <p id="experience-display">Software Developer at XYZ Corp.</p>
//   <h3>Skills</h3>
//   <p id="skills-display">JavaScript, TypeScript, React</p>
// </section>
//   `;
// });
