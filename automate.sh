#!/bin/bash

# Clone the repository
git clone https://github.com/eyob2015/gitPractice.git

# Change to the cloned directory
cd gitPractice

# Create a new folder called Pages
mkdir Pages

# Create a new file called index.html inside the Pages folder
touch Pages/index.html

# Add the following HTML code to the index.html file
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
</html>' > Pages/index.html

# Commit the changes
git add .
git commit -m "Added Pages folder and index.html file"

# Push the changes to GitHub
git push origin main
