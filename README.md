# Password Game
This is an implementation of the Password Game.

## Running the Application
The project uses the following:
- TypeScript
- NPM
- React
- Material-UI
- Vite
- Nginx
- Certbot
- Docker
- Docker Compose

For additional information on project specifications, see ```app/package.json```.

To run the application, run `docker compose up -d --build`, then enter
http://localhost in your broswer.

### Setting Up HTTPS With Certbot
There are configurations already set up via `cli.ini` in the `certbot` directory.
To receive an SSL certificate using those configurations, run:
```
docker compose run --no-deps --rm certbot certonly -d [enter domain here]
```

Fill out the prompt, then configure Nginx to use the SSL certificate and domain.

To renew the SSL certificate and use the newest certificate, run:
```
docker compose run --no-deps --rm certbot renew && docker exec nginx nginx -s reload
```

**NOTE**: Ensure port 443 is exposed in `docker-compose.yml` for HTTPS.
