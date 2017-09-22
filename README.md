# djweb
An online web portfolio. 


## deployment instructions

### development 

Backend: 

```cd react-backend && npm start run-dev```

```npm start```


### production 

I've configured this for deployment for AWS. 

Backend runs on elastic beanstalk, and runs with ```npm start```

Frontend is served from S3. Compile with ```npm run dist``` and move contents to S3. 



