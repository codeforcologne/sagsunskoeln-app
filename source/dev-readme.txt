Konfig

= Konfiguration der Entwicklungsumgebung

Ionic installieren

Nach dem Update: 
npm install

Wenn auf Android emuliert werden soll:
install android sdk 
    in Ubuntu über umake (benötigt auf 16.04 das OpenJDK 7, über eigene Quelle nachinstallieren)





= Android emulieren

install genymotion
    -> eigene Android SDK konfigurieren (mindesten 4.4 für debuggen)
    
install crosswalk    
 ionic plugin add cordova-plugin-crosswalk-webview

ionic run -l --address=192.168.0.29 android
(auf aktuelle IP achten, nicht der adb server)

Debuggen:
chrome starten, about:inspect eingeben  


= Weitere Tips für's Coding: 
Projekt in Visual Studio Code laden und dort (nach Installaton der Cordova-Tools Extension) 
als "Simulate Android in Browser" debuggen. Parallel dazu "ionic serve", damit Änderungen automatisch
übernommen werden. Die App läuft dann parallel auf den ports 8000 und 8100. Nach dem Refresh muss in Code
die App aber neu geladen werden. 

(Hinweis: Das funktioniert nicht für alle Cordova Plugins, siehe auch https://github.com/Microsoft/vscode-cordova#simulate-your-app-in-the-browser) 

Siehe auch: 
http://www.codeproject.com/Tips/1030830/Debug-Ionic-Android-Application-On-Mobile-Devices


== Tips für Visual Studio Code

Extension cordova-tools installieren

Anpassungen für launch.json


