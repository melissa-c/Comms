# Comms Companion
A communication tool for children with alternative abilities in speech and language.

## Review

### package.json
Seems to be a mishmash of slush pages and the express generator. Slush pages is for scaffolding client side apps that can be browserified into a bunch of static files (html, css and js.)

- start script uses nodemon which is fine for dev but not for deploying it to heroku. Just a heads up.
- changed the test script to remove smokestack and removed it from dependencies
- dist, push and deploy scripts don't make sense for this project. Removed.
- build script makes the bundle file in the root but watch is bundling into the client folder. Changed the build script to copy watch.
- superagent is an unused dependency
- budo is unused.
- ghpages is unused

### Testing

### Server.js
Hardcoding the db connection string is smelly. Load the config from the knexfile.

Using postgres for dev is a bit annoying and doesn't work on my machine, whereas sqlite might have been an easier choice for a new dev. Don't bother changing it but just know that it does make a difference for someone new coming to the project.

Ha! Just realised knex is totally unused! Why are you using pg instead of knex?

##Planning
Schematics, learning objectives, technology, roles, schedules.

##Project Description
A communication tool to assist children with alternative abilities in speech and language to communicate on a day to day basis.

This app works best on tablet devices to more easily view the pictures, and to optimise convenience and mobility. 

##App link:
to be added.

##Github workflow
* Master always has passing tests.
* Pull requests approved by Git master
* Features should be built on branches and the merged via pull request.

##Team Roles / Accountabilities

####Owner / Fun Master - The Glorious Leader
* Approve product direction and requirements.
* Organise and enforce mandatory fun times.
* Syph manager.

####Git Master - Mel.i.am
* Approve pull requests.

####Scrum Master / Communicator - The Zen Master
* Does agile tasks.
* Project manages.
* Zen manager.

####Deployment Master / Scheduler - Tobylerone
* Manages workflow and schedule.
* Oversee deployment.

##Typical Day Plan
* 9am - 8pm: until we hit MVP and then we can review.
* 9am: Review and stand up.
* 11am: Mindfulness and coffee break.
* 12.20pm: Checkin.
* 12.30 - 1.30pm: Lunch.
* 3 or 4pm: Mandatory fun.
* 7pm: Wrap up and dinner.
* 8pm: Home time.

##[Learning Objectives and Technologies](readMeLinks/learningObjs.md)

##[User Stories](readMeLinks/userStories.md)

##[MVP](readMeLinks/mvp.md)

##[Wireframes](readMeLinks/wireframes.md)

##[Stretches](readMeLinks/stretch.md)
