function getRandomChar(currentChar) {
    // Get a random character from the appropriate range based on the case of the current character
    let charCodeRange = currentChar === currentChar.toUpperCase() ?
                        { min: 65, max: 90 } : // Uppercase A-Z
                        { min: 97, max: 122 }; // Lowercase a-z
    let currentCharCode = currentChar.charCodeAt(0);
    let nextCharCode = currentCharCode + 1;

    // If we've gone past the end of the alphabet, wrap around to the beginning
    if ((currentChar === currentChar.toUpperCase() && nextCharCode > charCodeRange.max) ||
        (currentChar === currentChar.toLowerCase() && nextCharCode > charCodeRange.max)) {
        nextCharCode = charCodeRange.min;
    }

    return String.fromCharCode(nextCharCode);
}


export async function type(options) {
    return new Promise((resolve, reject) => {
        const text = options.text;
        const container = options.container;
        const speed = options.speed || 100;
        let clear = options.clear || false;
        const mistakeRate = options.mistakeRate || 0.1;

        var cursorSpan = document.createElement('span');
        cursorSpan.className = 'blinking-cursor';
        container.appendChild(cursorSpan);

        
        var i = 0;
        var isDeleting = false;
        var mistakeMade = false;
        var isClearing = false;

        function typingLoop() {
            var typingSpeed = speed + Math.random() * (speed / 2);
            var deletingSpeed = speed*4;
            var clearSpeed = 15;

            if (!isDeleting && !isClearing && i < text.length) {
                if (!mistakeMade && Math.random() < mistakeRate && i > 1) {
                    mistakeMade = true;
                    let randomChar = getRandomChar(text[i++]);

                    let charSpan = document.createElement('span');
                    charSpan.className = 'current-char';
                    charSpan.textContent = randomChar;
                    container.insertBefore(charSpan, cursorSpan);

                    isDeleting = true;
                    setTimeout(typingLoop, deletingSpeed);
                } else {
                    let charSpan = document.createElement('span');
                    charSpan.className = 'current-char';
                    charSpan.textContent = text[i++];
                    container.insertBefore(charSpan, cursorSpan);

                    if (mistakeMade) {
                        mistakeMade = false;
                        setTimeout(typingLoop, deletingSpeed);
                    } else {
                        setTimeout(typingLoop, typingSpeed);
                    }
                }
            } else if (isDeleting) {
                container.removeChild(container.lastChild.previousSibling);
                i--;
                isDeleting = false;
                setTimeout(typingLoop, deletingSpeed);
            } else if (isClearing && text && text !== '') {
                console.log("clearing");
                container.removeChild(container.lastChild.previousSibling);
                i--;
                if (i<0) {
                    isClearing = false;
                    i = text.length;
                }
                setTimeout(typingLoop, clearSpeed);
            }
            else {
                if(clear) {
                    console.log("start clearing");
                    clear = false;
                    isClearing = true;
                    i = text.length-1;
                    setTimeout(typingLoop, speed*2);
                }
                else {
                    cursorSpan.remove();
                    resolve();
                }
            }
        }

        typingLoop();
    });
}