document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;

        // Toggle the 'show' class to apply CSS transitions
        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            // Close any open answers before opening a new one
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('show');
            });
            answer.classList.add('show');
        }
    });
});
