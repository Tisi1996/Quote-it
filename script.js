let selectedFeelings = new Set();

function toggleFeeling(feeling) {
    const button = Array.from(document.querySelectorAll('.option')).find(btn => btn.textContent === feeling);
    
    if (selectedFeelings.has(feeling)) {
        selectedFeelings.delete(feeling);
        button.classList.remove('selected'); // Reset color
    } else {
        selectedFeelings.add(feeling);
        button.classList.add('selected'); // Change background color
    }
}

function generateQuote() {
    if (selectedFeelings.size === 0) {
        document.getElementById('quoteDisplay').innerText = "Please select at least one feeling.";
        document.getElementById('shareButton').style.display = 'none'; // Hide share button
        return;
    }

    let quotes = [];
    
    if (selectedFeelings.has('mad')) quotes.push("Anger is one letter short of danger.");
    if (selectedFeelings.has('bad')) quotes.push("Every day may not be good, but there’s something good in every day.");
    if (selectedFeelings.has('good')) quotes.push("Believe you can and you're halfway there.");
    if (selectedFeelings.has('in love')) quotes.push("Love is not about how much you say 'I love you,' but how much you can prove that it's true.");
    if (selectedFeelings.has('happy')) quotes.push("Happiness is not by chance, but by choice.");
    if (selectedFeelings.has('sad')) quotes.push("Sadness flies away on the wings of time.");
    if (selectedFeelings.has('confused')) quotes.push("Confusion is the first step to clarity.");
    if (selectedFeelings.has('excited')) quotes.push("Excitement is the joy of expecting what is to come.");
    if (selectedFeelings.has('anxious')) quotes.push("Anxiety is the dizziness of freedom.");
    if (selectedFeelings.has('bored')) quotes.push("Boredom is the feeling that everything is a waste of time.");
    if (selectedFeelings.has('hopeful')) quotes.push("Hope is the thing with feathers that perches in the soul.");
    if (selectedFeelings.has('grateful')) quotes.push("Gratitude turns what we have into enough.");
    if (selectedFeelings.has('overwhelmed')) quotes.push("It's okay to feel overwhelmed; just take a step back.");
    if (selectedFeelings.has('curious')) quotes.push("Curiosity is the engine of achievement.");
    if (selectedFeelings.has('motivated')) quotes.push("Motivation is what gets you started. Habit is what keeps you going.");

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerText = randomQuote;

    // Trigger the fade-in animation
    quoteDisplay.classList.remove('show'); // Reset opacity
    void quoteDisplay.offsetWidth; // Trigger reflow
    quoteDisplay.classList.add('show'); // Start fade-in

    document.getElementById('shareButton').style.display = 'block'; // Show share button
}

function shareOnTikTok() {
    const quote = document.getElementById('quoteDisplay').innerText;
    const url = `https://www.tiktok.com/share?text=${encodeURIComponent(quote)}`;
    window.open(url, '_blank'); // Opens TikTok share link
}

function shareVideo() {
    alert('Video or screenshot sharing functionality will be implemented here.');
    document.getElementById('shareVideoButton').style.display = 'none'; // Hide after sharing
}

// Video recording functionality (simplified for concept)
const video = document.getElementById('video');
const recordButton = document.getElementById('recordButton');

navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Error accessing webcam: ", error);
    });

recordButton.addEventListener('click', () => {
    document.getElementById('shareVideoButton').style.display = 'block'; // Show share video button
    alert('Video recording functionality will be implemented here.');
});
