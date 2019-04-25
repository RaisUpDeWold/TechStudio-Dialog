var modalTimer = -1;
var keepTime = 60;

function timerModalHandler() {
    keepTime --;
    $('#basicTimeModal .modal-body .modal-body-notify').text(
        'The dialog will be automatically closed in ' + keepTime + ' seconds!'
    );
    if (keepTime == 0) {
        clearInterval(modalTimer);
        modalTimer = -1;
        $('#basicTimeModal').modal('hide');
        $('#timeModalResult').text('The timer modal has been closed automatically.');
    }
}

$(document).ready(function () {
    /* Add Events for Timer Modal */
    // Event when the time dialog is shown
    $('#basicTimeModal').on('shown.bs.modal', function () {
        keepTime = 60;
        $('#basicTimeModal .modal-body .modal-body-notify').text(
            'The dialog will be automatically closed in ' + keepTime + ' seconds!'
        );
        modalTimer = setInterval(timerModalHandler, 1000);
    });

    // Event when the time dialog is hidden.
    $('#basicTimeModal').on('hidden.bs.modal', function () {
    });

    // Show bootstrap modal
    $('#basicTimeModal').modal('show');

    // Modal Close Action Handlers
    $('#basicTimeModal .btn-cancel').on('click', function () {
        $('#timeModalResult').text('You have closed the timer modal.');
    });

    // Modal Confirm Action Handler
    $('#basicTimeModal .btn-ok').on('click', function () {
        $('#timeModalResult').text('Action Performed.');
    })
});
