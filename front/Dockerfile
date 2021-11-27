FROM node
WORKDIR /front
COPY ./ /front
RUN echo "Now Installing..."
RUN npm install
RUN echo "Now Building..."
RUN npm run build
RUN echo "Complete Building!!"
CMD ["npm start"]