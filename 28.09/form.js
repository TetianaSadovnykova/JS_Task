$("#userForm").submit(function(event) {
    event.preventDefault();

    let errorMessages = [];

    if ($("#password").val() !== $("#password2").val()) {
        errorMessages.push("Passwords do not match each other.");
    }

    let dob = new Date($("#dofb").val());
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();

    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18) {
        errorMessages.push("You must be at least 18 years old to register.");
    }

    if (errorMessages.length > 0) {
        $("#errorMessages").html(errorMessages.join("<br>"));
    } else {
        alert("Form submitted successfully!");
    }
});