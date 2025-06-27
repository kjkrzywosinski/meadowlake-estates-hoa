/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Mortgage Calculator
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mortgageForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const salary = parseFloat(document.getElementById('salary').value);
        const percent = parseFloat(document.getElementById('percent').value) || 25;
        const downPayment = parseFloat(document.getElementById('downPayment').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value) || 6.8;
        const term = parseFloat(document.getElementById('term').value) || 30;

        if (isNaN(salary) || isNaN(downPayment)) {
            resultDiv.textContent = "Please fill out all required fields.";
            return;
        }
        // Monthly budget for mortgage payments
        const monthlyPayment = (salary * (percent / 100)) / 12;

        // Convert annual interest rate to monthly and term to months
        const monthlyRate = interestRate / 100 / 12;
        const totalPayments = term * 12;

        // Mortgage present value formula to calculate max loan amount
        const maxLoan =
            (monthlyPayment * (1 - Math.pow(1 + monthlyRate, -totalPayments))) / monthlyRate;

        const totalHousePrice = maxLoan + downPayment;

        const formatted = totalHousePrice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        resultDiv.textContent = `Maximum Affordable House Price: ${formatted}`;
    });

});
