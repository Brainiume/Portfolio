window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    if (!btn) return;

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;


            const rotateX = ((y - midY) / midY) * -35;
            const rotateY = ((x - midX) / midX) * 35;


        btn.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
        });


        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    document.querySelectorAll('.btnLong').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;


            const rotateX = ((y - midY) / midY) * -15;
            const rotateY = ((x - midX) / midX) * 15;


        btn.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
        });


        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

});