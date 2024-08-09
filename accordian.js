const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling; 
 // Get the next element (answer)

    // Toggle visibility of the answer
    answer.classList.toggle('show');

    // Rotate the plus/minus icon
    const icon = this.querySelector('img');
    icon.src = icon.src.includes('plus') ? './icon-minus.svg' : './icon-plus.svg';
  });
});