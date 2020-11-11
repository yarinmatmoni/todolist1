$(document).ready(function () {
    $("#addTaskButton").click(function (e) {
        e.preventDefault();
        let newTask = $("#input").val();
        let done = $('#input').hasClass('done');
        if (newTask == '')
            alert("Plese enter your task...");
        else {
            addTaskToList(newTask);
            saveTask(newTask,done);
        }
    })
    loadSaveList();
});

function addTaskToList(newTask) {
    $('#list').append('<li>' + newTask + '<span><i class = "fa fa-trash"</i><span>');
    $('#input').val("");
}

$(document).ready(function () {
    $("#list").on("click", "li", function () {
        $(this).toggleClass('done');
        saveTask($(this).value, $(this).hasClass('done'));
    });
});

$(document).ready(function () {
    $("#list").on('click', 'span', function () {
        $(this).parent().hide(800, function () {
            $(this).remove();
        });
        const index = $(this).parent().index();
        removeTaskSaveList(index);
    });
});

$(document).ready(function () {
    if ($('#list') != null) {
        $('.material-icons').click(function () {
            $('#list').empty();
            localStorage.clear();
        });
    }
});

function getDateTime() {
    let dateTime = new Date(Date.now()).toLocaleDateString();
    $('#dateTime').html(dateTime);
}
 setInterval(getDateTime);
