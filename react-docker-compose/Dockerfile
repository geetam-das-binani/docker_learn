# set up base image to create the image for react app
FROM node:20-alpine

# create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to the group
# this is done to avoid running as root
# if the app is run as root ,any vulnerability in the app can be exploited by the root user to gain access to the host system
# It's a good practice to run the app  as a non-root user
RUN  addgroup app && adduser -S -G app app


# set the user to run the app
USER app

# set the working directory
WORKDIR /app


COPY package*.json ./


#sometimes the ownership of the files in thw working directory is changed to the root 
#and thus app can't access the files in the working directory and 
#it will result in an error -> Permission denied
#to avoid this , change the ownership of the files to the root user

USER root


# change the ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
#chown command is used to change the user and/or group ownership of a file or directory

RUN chown -R app:app .


#change the  user back to the app user
USER app

# install dependencies
RUN npm install


# copy the rest of the files to the working directory
COPY . .


# expose port 5173 to tell Docker that that the container listens on the specified network port at runtime

EXPOSE 5173


#command to run the app
#  CMD [ "npm", "run", "dev" ] OR
CMD npm run dev




