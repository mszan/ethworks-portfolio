// Get all elements with 'modal--listener' class and loop through to add event listeners for each one.
document.querySelectorAll('.modal--listener').forEach(item => {
    item.addEventListener('click', function() {

        // Get associated modal.
        const modal = document.getElementById(`${this.id}-modal`);

        // Show associated modal.
        modal.style.display = 'block';

        // When user clicks on "X" button, close the associated modal.
        modal.querySelector('.w3-modal-close-btn').addEventListener('click', function() {
            modal.classList.add('w3-animate-show');
        });

        // When associated modal fades out (animation ends), set "display: none;".
        modal.addEventListener('animationend', function() {
            if (this.classList.contains('w3-animate-show')) {
                this.style.display = 'none';
                this.classList.remove('w3-animate-show')
            }
        });

        // When the user clicks anywhere outside of the associated modal, close it.
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.classList.add('w3-animate-show');
            }
        }
    });
});