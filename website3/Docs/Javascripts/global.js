const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = (hours % 12 || 12).toString().padStart(2, '0');

    timeElement.innerHTML = `
        <span class="font-semibold text-2xl !leading-tight">${hours} : ${minutes}</span>
        <span class="opacity-70">${ampm}</span>
    `;
}

setInterval(updateTime, 1000);

updateTime();

function updateDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[now.getDay()];
    const date = now.getDate().toString().padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    dateElement.innerHTML = `
        <span class="block font-semibold text-xl !leading-tight">${dayName}</span>
        ${date} ${month} ${year}
    `;
}

updateDate();

