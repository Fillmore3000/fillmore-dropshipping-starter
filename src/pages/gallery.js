import Gallery from "react-photo-gallery";
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

function GallerPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const photos = [
    {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622110143/gallery-posts/social-post8_waqrib.jpg",
      width: 4,
      height: 4
    }, {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109761/gallery-posts/social-post21_sdle4j.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109760/gallery-posts/social-post15_wvjbik.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109760/gallery-posts/social-post16_hyfihe.jpg",
      width: 4,
      height: 4
    },{
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109762/gallery-posts/social-post22_l9gnwb.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622110143/gallery-posts/social-post19_cgshsx.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109761/gallery-posts/social-post18_wfcvm9.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109761/gallery-posts/social-post20_jkxzjo.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109760/gallery-posts/social-post17_cuhbbf.jpg",
      width: 4,
      height: 4
    },{
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109760/gallery-posts/social-post14_rfnxz2.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109759/gallery-posts/social-post13_gqql6j.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109759/gallery-posts/social-post11_xyxq0f.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109758/gallery-posts/social-post9_mcmpxq.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109757/gallery-posts/social-post7_cizxyj.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109757/gallery-posts/social-post4_rjjdkq.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109757/gallery-posts/social-post5_xd7ijz.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109757/gallery-posts/social-post1_op6xbc.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1622109757/gallery-posts/social-post3_rg07ca.jpg",
        width: 4,
        height: 4
      }
    ];
    

  return (
   
      <div className="pb-6 md:pb-12">
          <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Gallery</h1>
      </section>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      
    </div>
  );
}

export default GallerPage;
