# ec2-nodejs-pipleline

A minimal Node.js web server that displays its current deployed version.

## Run locally

```bash
node app/server.js
```

Open `http://localhost:3000`. The version shown is read from `app/version.txt`.

## Project layout

```
├── .github
│   └── workflows
│       └── deploy.yml    <= the GitHubAction deploy worksflow
├── .gitignore
├── README.md
├── app
│   ├── .htmlhintrc       <= settings for the html-validate
│   ├── .stylelintrc.json <= settings for the stylelint
│   ├── index.html        <= static html page
│   ├── package.json
│   ├── server.js         <= the actual app
│   └── version.txt       <= initial version
├── scripts
│   └── ec2-userdata.sh  <= file exectued during EC2 creation, basic files
└── terraform
    └── main.tf          <= terraform command file, including variables and outputs
```
