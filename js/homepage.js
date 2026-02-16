// Hero Video Autoplay
(function() {
    const v = document.getElementById('heroVideo');
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
    v.addEventListener('canplay', () => v.play().catch(() => {}), { once: true });
    document.addEventListener('click', () => { if (v.paused) v.play(); }, { once: true });
    document.addEventListener('touchstart', () => { if (v.paused) v.play(); }, { once: true });
})();

// Email Signup → Supabase
(function() {
    const SUPABASE_URL = 'https://bssehxpgeazjjuvkoyef.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzc2VoeHBnZWF6amp1dmtveWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0ODU3NDAsImV4cCI6MjA4NTA2MTc0MH0.G3GEIG6AU8G0h4KWAkvLCwMSO2-rgFIp4TJvXPDxNKQ';

    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('formMessage');

    if (!form) return;

    // Show button once an @ is entered
    emailInput.addEventListener('input', () => {
        if (emailInput.value.includes('@')) {
            submitBtn.classList.add('visible');
        } else {
            submitBtn.classList.remove('visible');
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        if (!email) return;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting…';
        message.textContent = '';
        message.className = 'form-message';

        const { error } = await supabase
            .from('subscribers')
            .insert({ email });

        if (error) {
            if (error.code === '23505') {
                message.textContent = 'You\'re already on the list!';
                message.classList.add('success');
            } else {
                message.textContent = 'Something went wrong. Please try again.';
                message.classList.add('error');
            }
        } else {
            form.style.display = 'none';
            message.textContent = '02.16.26';
            message.classList.add('success');
            return;
        }

        submitBtn.disabled = false;
        submitBtn.textContent = 'Enter';
    });
})();
