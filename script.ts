// Get references to the form and output container
const form = document.getElementById('resume-form') as HTMLFormElement;
const output = document.getElementById('resume-output') as HTMLElement;

// Helper function to make an element editable
function makeEditable(elementId: string) {
  const element = document.getElementById(elementId) as HTMLElement;

  if (!element) {
    console.error(`Element with id "${elementId}" not found`);
    return;
  }

  element.addEventListener('click', () => {
    const originalText = element.innerText;

    // Create an input field
    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.style.width = '100%';

    // Replace the element with the input field
    element.replaceWith(input);

    // Save changes on blur or Enter key
    input.addEventListener('blur', () => {
      element.innerText = input.value;
      input.replaceWith(element); // Replace input back with updated element
    });

    input.addEventListener('keypress', (e) => {
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
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Generate and display the resume HTML
  output.innerHTML = `
    <h2 id="name-display">${name}</h2>
    <p id="email-display"><strong>Email:</strong> ${email}</p>
    <h3>Education</h3>
    <p id="education-display">${education}</p>
    <h3>Work Experience</h3>
    <p id="experience-display">${experience}</p>
    <h3>Skills</h3>
    <p id="skills-display">${skills}</p>
  `;

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
