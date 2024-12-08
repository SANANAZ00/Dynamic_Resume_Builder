// Get form and output elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const output = document.getElementById('resume-output') as HTMLElement;

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form reload

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Generate resume HTML
  output.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Work Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;
});
