# Custom search engine frontend

Frontend for custom search engine(based on elastic).

Frontend build with React JS.

# Install

1 . Clone repository

```
https://github.com/antonshell/react-search.git
```

2 . Install dependencies

```
npm install
```  

3 . Configure api url, 

```
cp proxy/_config.php.dist proxy/_config.php
nano proxy/_config.php
```

4 . Deploy to build folder. Builds react app, copy proxy script

```
./deploy.sh
```

Under hood it uses

```
npm run build
cp -R proxy build/
```

5 . Configure web-server to use ```build``` as web directory 

# Install with docker:

The same as install process. But need to do extra things

1 . Configure docker compose file, change needed settings. ports, volumes etc

```
cp docker-compose.yml docker-compose.yml.dist
nano docker-compose.yml
```

2 . Run

```
docker-compose run
```

3. Check search frontend

```
http://127.0.0.1:8070/ 
```

or whatever