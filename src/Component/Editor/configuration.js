import React from 'react';

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
    //  tools: {
    //  },
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
                }
            ],
            "version": "2.22.2"
        }
  });
};

export default Configuration;
