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
        <span class="font-semibold md:text-5xl text-4xl !leading-tight">${hours} : ${minutes} ${ampm}</span>
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
        <span class="block font-semibold md:text-4xl text-3xl md:tracking-wider text-zinc-400 !leading-tight">${dayName}</span>
        <span class="block font-semibold md:text-3xl text-2xl text-zinc-400 !leading-tight">${date} ${month} ${year}</span>
        
    `;
}

updateDate();

