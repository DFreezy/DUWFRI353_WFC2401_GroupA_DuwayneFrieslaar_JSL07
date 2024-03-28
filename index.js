document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modalElement = document.getElementById('modal'); 
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  modalElement.style.display = 'none';

  function displayModal() {
      cardForm.addEventListener('submit', function (e) {
          e.preventDefault();

          const studentNameInput = document.getElementById('studentName');
          const personalMessageInput = document.getElementById('personalMessage'); // Corrected variable name
          const courseNameInput = document.getElementById('courseName'); // Corrected variable name

          const studentName = studentNameInput.value;
          const personalMessage = personalMessageInput.value;
          const courseName = courseNameInput ? courseNameInput.value : "a course";

          if (studentName.trim() === '' || personalMessage.trim() === '') {
              alert('Please fill in all fields');
              return;
          }

          certificateContent.innerHTML = `
              <h3>${studentName}</h3>
          `;
          
          modalElement.style.display = 'block';

          studentNameInput.value = '';
          personalMessageInput.value = '';
          if(courseNameInput) courseNameInput.value = '';
      });
  }

  displayModal(); // Call the function to attach the event listener

  closeModal.addEventListener('click', function () {
      modalElement.style.display = 'none';
  });
});
