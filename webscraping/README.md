# Web-Scrapers

# passwords.json
Have all the keys and private data you do not want the users to see. I have left it in the repo as an example.

## database_connection.py: 
Connects to the database server and creates a new database 'dbikes' and the required tables to store the data.

## main.py 
Connects to the JCDeaux API and extracts the availability data, then inserts that data into the database every 10 minutes.
Needs to be constantly running, for that end you can run a nohup process in Linux. Example: 'python3 main.py &' (The terminal needs to be in the same folder as the script).

## static_data.py
Connects to the JCDeaux API and extracts the stations data, then inserts that data into the database.
Run the script only once.

## weather_data.py
Connects to the Open Weather API, fetch the latest data and inserts it into the database every 10 minutes. This is important in the future to make predictions. 
Same as with 'main.py' the process needs to be constantly running.