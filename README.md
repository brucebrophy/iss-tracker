# Raspberry Pi ISS Tracking Dashboard

Dashboard for tracking and steaming video from the International Space Station

<img src="./screenshots/tracking-page.png"
     alt="Tracking Page Screenshot"
     style="width: 450px" />

## Installation

Run the following commands

`cp .env.example .env.local`

`npm install`

**Note:** You will need a Google Map API key to add to the .env.local

## Running the Dashboard (Browser)

`npm run start`

The application will start a web server at [http://localhost:3000](http://localhost:3000)

## Running the Dashboard in Kiosk Mode (on Raspbery Pi)

On your Pi run the following command `sudo apt-get install xdotool unclutter sed`

From the project directory run the following commands

`cp kiosk.sh /home/pi`

*Copies the the bash script needed to start the application to `/home/pi`*

`sudo cp kiosk.service /lib/systemd/system`

*Copies the the service file that will start the dashboard application once the Pi is powered on*

-----

Now that the service file and bash script is copied you can cd to `/home/pi` and enable the service using the following commands.

`sudo systemctl enable kiosk.service`

*Enables the service on your Raspberry Pi*

At this point you can start the service by running `sudo systemctl start kiosk.service` or reboot and the service should start on it's own.

If you ever need to stop the service run `sudo systemctl stop kiosk.service` or if you need to disable it run `sudo systemctl disable kiosk.service`
