Requisitos previos

Herramienta	- Version

Node.js	- v21.7.3
Json-server	npm i -g json-server - json-server



Instalación
•	Clonar el repositorio: git clone https://github.com/blasecato/software-ol
$ cd test-ol
$ npm install

•	Configuración de entorno (Environment Setup): Cree un atchivo .env en la raíz del proyecto 
Las variables son las siguientes:

Nombre de la variable	= value :

VITE_API_URL="http://localhost:3000"
VITE_API_KEY_CLIMATE=“a4c59446771676aff944c50243d13e28”
VITE_API_URL_CLIMATE=“https://api.openweathermap.org/data/2.5/weather”

•	Ejecución: npm run dev 
(Este comando ejecutara tando el json server y la aplicación).
