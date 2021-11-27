FROM node
WORKDIR /api
COPY ./ /api
RUN echo "Now Installing..."
RUN npm install
RUN echo "Now Building..."
RUN npm run build
RUN echo "Complete Building!!"
CMD ["npm start"]