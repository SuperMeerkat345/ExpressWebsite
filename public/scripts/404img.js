const img = document.getElementById('404img');
console.log('404 img script');

img.addEventListener('click', () => {
    console.log('click');
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'width=600,height=400,scrollbars=yes');
});