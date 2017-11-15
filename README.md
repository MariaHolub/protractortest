# This is a simple test created for Protractor

To launch the test:

1. Go to https://nodejs.org/en/ to download and install the latest .nodejs version;
2. Go to http://www.oracle.com/technetwork/java/javase/downloads/index.html to download and install latest  Java Development Kit (JDK) version;
3. Install Protractor with 
<pre><code>
npm install -g protractor
</code></pre>

4. Download the necessary binaries for Selenium Server with 
<pre><code>
webdriver-manager update
</code></pre>

5. Run Selenium Server with 
<pre><code>
webdriver-manager start
</code></pre>

6. Clone repository https://github.com/cornflourblue/angular-registration-login-example/
7. Install the http-server with 
<pre><code>
npm install -g http-server
</code></pre>

8. Move to the directory containing static web files e.g cd \projects\angular-registration-login-example;

9. Download the spec.js and conf.js files from this repository to the same folder; 

10. Start the server with 
<pre><code>
http-server
</code></pre>

11. Run the test with 
<pre><code>
protractor conf.js
</code></pre>

