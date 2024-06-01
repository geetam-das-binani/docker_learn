FROM ubuntu  

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get update -y    
RUN apt-get install -y nodejs   


WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json



RUN  npm install

# COPY main.js main.js 
# COPY a single file

COPY main.js main.js 

# COPY . .  
#copy all files above


ENTRYPOINT [ "node" , "main.js" ]
