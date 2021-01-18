#!/bin/bash
export DISPLAY=:0

xset s noblank
xset s off
xset -dpms

unclutter -idle 0.5 -root &

sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

git -C ./Desktop/iss-tracker pull &&
npm --prefix ./Desktop/iss-tracker install ./Desktop/iss-tracker &&
npm --prefix ./Desktop/iss-tracker run start ./Desktop/iss-tracker &

/usr/bin/chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:3000 &