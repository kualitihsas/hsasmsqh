document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const formData = new FormData(this); // Get form data including files

    fetch('https://hsasmsqh.vercel.app/upload', {
        method: 'POST',
        body: formData, // Send the form data to the server
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show the confirmation modal on successful upload
            document.getElementById('confirmationModal').style.display = 'block';
        } else {
            alert('Error uploading files');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error uploading files');
    });
});

document.getElementById('closeModal').addEventListener('click', function() {
    // Close the modal when the "Close" button is clicked
    document.getElementById('confirmationModal').style.display = 'none';
});
