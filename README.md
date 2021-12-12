# Learn-Docker
**Blurb**
<br>
This is a repository dedicated to my learning of the docker software and how to utilise it
<br>
*Prerequisites:*
- *Docker*
- *Node(If wanting to mess with the source code & test)*
---
**Running / Intializing the Repository in Docker**
<br>
1. Ensure Docker is started on your machine, this can be checked either in the taskbar or  when you enter `docker version` into cmd and an error is thrown.
2. Navigate into the repository in Terminal/Powershell.
3. Next Enter in the following code `docker-compose up --build`
4. You can check your containers are up by seeing the following in your CMD/Powershell window:
backend_1   | App listening on http://localhost:8080
<br>
frontend_1  | App listening on http://localhost:8040
<br>
Or by checking Docker Desktop if installed on your machine.
5. Navigate to the link provided by the frontend_1 container and you should see the site!
<br>
---
*Author: Harry Vince*