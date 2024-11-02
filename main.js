<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Treasure Smp</title>
    <style>
        /* Base styling */
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url('https://assets-global.website-files.com/6537b1db509ef0817e8f4b5d/653811ecfaa8e611f576bc26_About%20Lines.svg');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            font-family: Arial, sans-serif;
            color: #e0f7fa;
            scroll-behavior: smooth;
            background-color: #0a1a33; /* Matches color with background image */
        }

        /* Header section */
        .banner {
            width: 90%;
            max-width: 800px;
            margin-top: 30px;
            padding: 15px;
            border-radius: 20px;
            background-color: rgba(0, 38, 77, 0.8);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        /* Banner image */
        .banner img {
            width: 100%;
            height: auto;
            border-radius: 15px;
        }

        /* Button styling */
        .button-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
            width: 100%;
        }

        .button {
            padding: 12px 20px;
            background-color: #003366;
            color: #e0f7fa;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            transition: background-color 0.3s ease, transform 0.2s ease;
            width: 100%;
            max-width: 300px;
            align-self: center;
        }

        .button:hover {
            background-color: #00509e;
            transform: scale(1.05);
        }

        /* Section styling */
        section {
            margin: 30px 0;
            width: 80%;
            max-width: 800px;
            padding: 20px;
            background-color: rgba(0, 38, 77, 0.8);
            border-radius: 10px;
            color: #e0f7fa;
            text-align: center;
        }
    </style>
    <script>
        // Function to log button clicks and redirect
        function handleButtonClick(event, sectionId) {
            console.log('Button clicked:', event.target.textContent);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</head>
<body>

    <div class="banner">
        <!-- Updated Banner image -->
        <img src="https://cdn.discordapp.com/attachments/1301940180323799142/1302107649273499718/image.png?ex=6726e9bf&is=6725983f&hm=e992e21be1e2e13528fe6f9f73c78add507e300fcdcf79b133caf5d65669a269" alt="Banner Image">
        <h1>Welcome to Treasure Smp</h1>
    </div>

    <div class="button-container">
        <!-- Buttons for navigation -->
        <a href="https://masionz7074.github.io/Our-Server/#discord" onclick="handleButtonClick(event, 'discord')" class="button">Discord</a>
        <a href="https://masionz7074.github.io/Our-Server/#info" onclick="handleButtonClick(event, 'info')" class="button">Info</a>
        <a href="https://masionz7074.github.io/Our-Server/#application" onclick="handleButtonClick(event, 'application')" class="button">Application</a>
        <a href="https://masionz7074.github.io/Our-Server/#credits" onclick="handleButtonClick(event, 'credits')" class="button">Credits</a>
    </div>

    <!-- Page sections -->
    <section id="discord">
        <h2>Discord</h2>
        <p>Join our Discord community to connect with other players!</p>
    </section>

    <section id="info">
        <h2>Info</h2>
        <p>Learn more about our server, rules, and gameplay mechanics.</p>
    </section>

    <section id="application">
        <h2>Application</h2>
        <p>Submit your application to join the Treasure Smp.</p>
    </section>

    <section id="credits">
        <h2>Credits</h2>
        <p>Thanks to everyone who made this server possible!</p>
    </section>

</body>
</html>
