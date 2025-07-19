// Contact form handler with multiple options
const sendMessage = async (name, email, message) => {
    if (!name || !email || !message) {
        throw new Error('All fields are required');
    }
    try {
        const response = await fetch('https://contact-me-mauve.vercel.app/api/add-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        if (!response.ok) {
            console.error('Error sending message:', response.statusText);
            throw new Error('Failed to send message');
        }else{
            const data = await response.json();
            if (data.success) {
                return { success: true, message: 'Message sent successfully!' };
            } else {
                console.error('Error from server:', data.message);
                throw new Error(data.message || 'Failed to send message');
            }
        }
    } catch (error) {
        console.error('Network error:', error);
        throw new Error('Network error: ' + error.message);
    }
}

const showNotification = (message, type = 'success') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fa ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 5000);
}

const handleFormSubmit = async (event) => {
    event.preventDefault();

    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    // Get form values
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const message = document.getElementById('message-input').value.trim();

    // Validate inputs
    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    // Show loading state
    submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    try {
        const result = await sendMessage(name, email, message);

        if (result.success) {
            showNotification(result.message, 'success');

            // Clear form
            document.getElementById('name-input').value = '';
            document.getElementById('email-input').value = '';
            document.getElementById('message-input').value = '';
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification(error.message || 'Failed to send message. Please try again.', 'error');
    } finally {
        // Restore button state
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}