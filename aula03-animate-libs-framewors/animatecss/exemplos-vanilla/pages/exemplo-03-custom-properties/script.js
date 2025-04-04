let logoAnimatecssDiv = document.querySelector('.logoAnimatecss');

logoAnimatecssDiv.addEventListener('mouseover', () => {
    console.log(logoAnimatecssDiv)
    logoAnimatecssDiv.classList.remove('logoAnimatecss__fadeIn');
    logoAnimatecssDiv.classList.add('animate__animated', 'animate__fadeOut');
    logoAnimatecssDiv.style.setProperty('--animate-duration', '4s');
})