// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Reset errors
        clearErrors();

        // Validate form
        if (validateForm()) {
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                // Simulate successful submission
                submitBtn.classList.remove('loading');
                submitBtn.classList.add('success');
                submitBtn.textContent = 'Message Sent!';

                // Show success message
                successMessage.textContent = 'Your message has been sent successfully!';
                successMessage.style.display = 'block';

                // Reset form
                form.reset();

                // Reset button after delay
                setTimeout(() => {
                    submitBtn.classList.remove('success');
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        }
    });

    // Input validation handlers
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
        } else {
            nameError.textContent = '';
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });

    messageInput.addEventListener('input', function() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
        } else {
            messageError.textContent = '';
        }
    });

    // Clear all error messages
    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMessage.style.display = 'none';
    }

    // Validate form inputs
    function validateForm() {
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        }

        return isValid;
    }

    // Smooth scroll helper (if needed for page navigation)
    window.smoothScrollTo = function(targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
});