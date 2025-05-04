// This script handles the FAQ section of the webpage.
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');
  
  questions.forEach(question => {
    const answer = document.getElementById(question.getAttribute('aria-controls'));
    
    question.addEventListener('click', function() {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      // Close all other questions
      questions.forEach(q => {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
          document.getElementById(q.getAttribute('aria-controls')).setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle current question
      question.setAttribute('aria-expanded', !isExpanded);
      answer.setAttribute('aria-expanded', !isExpanded);
    });
  });
});
