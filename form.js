        function correctAndValidateURL(urlInput) {
            var urlValue = urlInput.value.trim();
            var urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

            // If the input value does not start with 'http://' or 'https://', add 'https://'
            if (urlValue && !urlValue.match(/^https?:\/\//)) {
                urlValue = 'https://' + urlValue;
            }

            // Update the input value
            urlInput.value = urlValue;

            // Validate the URL
            if (!urlPattern.test(urlValue)) {
                document.getElementById('error-message').style.display = 'block';
                return false;
            } else {
                document.getElementById('error-message').style.display = 'none';
                return true;
            }
        }

        document.getElementById('urlInput').addEventListener('blur', function(event) {
            correctAndValidateURL(event.target);
        });

        document.getElementById('urlForm').addEventListener('submit', function(event) {
            if (!correctAndValidateURL(document.getElementById('urlInput'))) {
                event.preventDefault(); // Prevent form submission if URL is invalid
            } else {
                // Display the submitted URL
                var submittedURL = document.getElementById('urlInput').value;
                document.getElementById('submitted-url').textContent = submittedURL;
                event.preventDefault(); // Prevent default form submission for demonstration purposes
            }
        });

        document.getElementById('urlInput').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                if (!correctAndValidateURL(event.target)) {
                    event.preventDefault(); // Prevent form submission if URL is invalid
                }
            }
        });