//your JS code here. If required.
 const bands = [
            'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
            'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
            'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
            'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
        ];

        // Words to ignore while sorting
        const ignoreWords = ['a', 'an', 'the'];

        // Function to normalize band names by removing the ignored words
        function normalizeBandName(bandName) {
            // Split the band name into words
            const words = bandName.split(' ');
            // Remove the ignored words (case insensitive)
            return words.filter(word => !ignoreWords.includes(word.toLowerCase())).join(' ');
        }

        // Sort the bands while ignoring the words "a", "an", and "the"
        const sortedBands = bands.sort((bandA, bandB) => {
            const normalizedA = normalizeBandName(bandA);
            const normalizedB = normalizeBandName(bandB);
            return normalizedA.localeCompare(normalizedB);
        });

        // Access the <ul> element by its id
        const ulElement = document.getElementById("bands");

        // Loop through the sorted bands and create <li> elements
        sortedBands.forEach(function(band) {
            const li = document.createElement("li");
            li.textContent = band; // Set the band name as the text content of the <li>
            ulElement.appendChild(li); // Append the <li> to the <ul>
        });