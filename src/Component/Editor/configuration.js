import React from 'react';
import SimpleImage from './simple-image';

const Configuration = () => {
  return ({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
      autofocus: true,

     /**
      * Available Tools list.
      * Pass Tool's class or Settings object for each Tool you want to use
      */
      tools: {
        image: SimpleImage
      },
     /**
      * Previously saved data that should be rendered
      */
    //  onReady: () => {
    //     console.log('Editor.js is ready to work!')
    //  },
    //  onChange: (api, event) => {

    //     console.log('Now I know that Editor\'s content changed!', event)
    // },
    data:
        {
            "time": 1643195431504,
            "blocks": [
                {
                    "id": "o72AO0sY-1",
                    "type": "paragraph",
                    "data": {
                        "text": "sdjcvdhsvcdsghvchgdsvghcds"
                    }
                },
                {
                    "id": "6LPs8gr9-a",
                    "type": "paragraph",
                    "data": {
                        "text": "vhjsbdjvbhjdbvjhdhsbvjhdbjfvdv"
                    }
                },
                {
                    "id": "c5vaZWuzj8",
                    "type": "paragraph",
                    "data": {
                        "text": "fdjkbdjfjbvfdkbvfdnkbnkfdbfd"
                    }
                },
                {
                    "type": "image",
                    "data": {
                        "url": "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
                    }
                },
                {
                    "type": "image",
                    "data": {
                        "url": ""
                    }
                },
                {
                    "type": "image",
                    "data": {
                        "url": ""
                    }
                }
            ],
            "version": "2.22.2"
        }
  });
};

export default Configuration;
