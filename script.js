//index.html (explore more button), when click, it scrolls down to next section smoothly
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.explore-more-button').addEventListener('click', () => { 
        document.querySelector('#section-brief').scrollIntoView({ behavior: 'smooth' });
    });
});

//comments.html (successful pop up message when user fill all the forms, otherwise error messaege will pop up)
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Check if form is valid
            if (this.checkValidity()) {
                alert('Successful');
            } else {
                alert('Please fill out all required fields.');
            }
        });
    });

//video.html (successful pop up message when user fill all the forms, otherwise error messaege will pop up)
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Check if form is valid
            if (this.checkValidity()) {
                alert('Successful');
            } else {
                alert('Please fill out all required fields.');
            }
        });
    });