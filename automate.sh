#!/bin/bash

# Clone the project
git clone https://github.com/eyob2015/gitPractice.git Evangadi

# Create a new folder called "Pages" inside the cloned project
mkdir Evangadi/Pages

# Create a new file called "index.html" inside the "Pages" folder
touch Evangadi/Pages/index.html

# Add an HTML boilerplate and title to the "index.html" file
echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eyob Sisay Git Practice</title>
</head>
<body>
    <h1>Welcome to my practice page</h1>
</body>
</html>' > Evangadi/Pages/index.html

# Commit the changes
git add .
git commit -m "Added index.html file and boilerplate"

# Push the changes to GitHub
git push origin main
