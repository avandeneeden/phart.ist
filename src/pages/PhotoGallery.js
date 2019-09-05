import React from 'react';
import Gallery from 'react-grid-gallery';

const importAll = (gallery, thumbs) => {
  let images = gallery.keys().map((item, index) => {
    // console.log('item: ',item)
    const thumbnail = item.replace('./', './thumb.');
    // console.log('thumbnail: ',thumbnail)
    return {
      src: gallery(item),
      thumbnail: thumbs(thumbnail),
      thumbnailWidth: 200,
      thumbnailHeight: 150
    }
  });
  return images;
}

const IMAGES = importAll(require.context('../gallery', false, /\.(jpe?g)$/), require.context('../gallery/thumbs', false, /\.(jpe?g)$/));

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