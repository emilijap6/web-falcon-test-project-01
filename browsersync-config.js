module.exports = {
 
    // Serve files from the app directory
    server: "dist",

    // Serve files from the current directory
    server: true,

    // Show directory listings for the current server
    directory: true,

    // Include only files with these extensions html, css, js from the dist directory and assets directory
    files: ["dist/**/*.html", "dist/**/*.css", "dist/**/*.js", "assets/**/*"],
   
    "reloadOnRestart": true,
    "port": 3000,
    "browser": "chrome",
    "reloadDelay": 300,
    "watchEvents": [ 
        "change" 
    ]
};