
document.addEventListener("DOMContentLoaded", function () {
    var volunteerButton = document.getElementById('volunteer-button');

    volunteerButton.addEventListener('click', function (event) {
        event.preventDefault();

        var name = prompt('Enter your name:');
        var email = prompt('Enter your email:');
        var phone = prompt('Enter your phone number:');
        var volunteerInfo = document.createElement('div');
        volunteerInfo.innerHTML = '<h3>Volunteer Information:</h3>' +
            '<p><strong>Name:</strong> ' + name + '</p>' +
            '<p><strong>Email:</strong> ' + email + '</p>' +
            '<p><strong>Phone:</strong> ' + phone + '</p>';

        document.body.appendChild(volunteerInfo);
    });

    var charityName = document.querySelector('h2');

    charityName.addEventListener('mouseover', function () {
        charityName.innerHTML = 'Protect Life and Health';
    });

    charityName.addEventListener('mouseout', function () {
        charityName.innerHTML = 'Doctors Without Borders';
    });
});


