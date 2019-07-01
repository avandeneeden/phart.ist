import React from 'react';
import Gallery from 'react-grid-gallery';

const importAll = (r) => {
  let images = r.keys().map((item, index) => {
    return {
      src: r(item),
      thumbnail: r(item.replace('../', '../thumbs/thumb.')),
      thumbnailWidth: 200,
      thumbnailHeight: 150
    }
  });
  return images;
}

const IMAGES = importAll(require.context('../gallery', false, /\.(jpe?g)$/));

// const IMAGES =
// [{
//         src: IMG_0284,
//         thumbnail: IMG_0284
// }]

export default class PhotoGallery extends React.Component {
  render(){
    return (
      <div>
        <h1>Behold</h1>
        <div>
          <Gallery images={IMAGES}/>,
        </div>
      </div>
    )
  }
}