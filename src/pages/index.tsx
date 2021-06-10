import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";
import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";
import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductGrid from "../components/ProductGrid";
import {Image} from 'cloudinary-react';

type IndexPageProps = {
  products: PrintfulProduct[];
};

const videoSource = "https://res.cloudinary.com/fillmore-xr-limited/video/upload/v1621806401/GameClip5_zwixac.mp4";
const videoSource2 = "https://res.cloudinary.com/fillmore-xr-limited/video/upload/v1621805420/GameClip6_r6cshk.mp4";
const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  <>
    <div className="text-center pb-6 md:pb-12 text-lg mb-4">
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Welcome
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">We create Digital Voxel Art, Assets, Animations and Gaming Software. </h4>
      </section>
      <div className="backG">
         <video autoPlay={true} loop  muted  className="Video">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      
       </div>
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold home-h1">
        WHAT WE DO
      </h1>
      <Container>
        <Row noGutters>
          <Col xs={12} sm={3} md={3}>  
          <p><b>VOXEL ART/ANIMATION</b></p>
          <Image
                      className="w-full fill-current"
                      src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685507/ser-pic1_fxbcb1.jpg"
                      role="presentation"
                    />
          <p>Voxel art is a type of art form where 3D models are constructed entirely out of 3D cubes.</p></Col>
          <Col xs={12} sm={3} md={3}>
          <p><b>VOXEL DIGITAL ASSETS</b></p>
          <Image
                      className="w-full  fill-current"
                      src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685508/ser-pic2_hic9cp.jpg"
                      role="presentation"
                    />
          <p>Digtal Assets such as NFT's for multiple Blockchains.</p></Col>
          <Col xs={12} sm={3} md={3}><p><b>COMMISSIONS</b> </p>
          <Image
                      className="w-full fill-current"
                      src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685509/ser-pic3_n74hmw.jpg"
                      role="presentation"
                    />
        <p>We love to hear about our ideas! and offer good rates.</p></Col>
          <Col xs={12} sm={3} md={3}>
          <p><b>GAMING</b> </p>
          <Image
                      className="w-full fill-current"
                      src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685508/ser-pic4_dywimc.jpg"
                      role="presentation"
                    />
        <p>We create both forms of 2d and 3d games for multi-platforms.</p></Col>
        </Row>
      </Container>
    
      
      
      
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        ALL PRODUCTS
      </h1>
    </div>
    <ProductGrid products={products} />
    <div className="text-center pb-6 md:pb-12">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold home-h1">
       OUT NOW
      </h1>
      <Container>
        <Row noGutters>
          <Col xs={12} sm={6} md={6} >
            <div style={{textAlign:'left'}}>
            <h2 className="text-3xl mb-3">Henny-X NFT Drop 1(Only 1000)</h2>
      <p><b>Blockchain Fantasy RPG Gaming ART and Gaming NFT</b></p>
      <p>Set in a fantasy world filled with monster’s magic and enemies, Henny X is in a Search to find his true self and make it to the free Peaceful land. 
        The backdrop is set in futuristic Egyptian style theme – where he must journey through the metaverse.
      </p>
       <a className="example_f" href="https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:601148?">MORE INFO</a>
      </div>
      </Col>
      <Col xs={12} sm={6} md={6}>
      <img
                      className="w-full  fill-current"
                      src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1623149977/henny-x-by-anymeans_cr45rd.jpg"
                      role="presentation"
                    />
      </Col></Row>
      </Container>
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold home-h1">
        SIGN UP
      </h1>
      <div > <iframe width="100%" style={{height:'160px'}} scrolling="no" className="h-full" src="https://landing.mailerlite.com/webforms/landing/l4f4e2" frameBorder="0" title="news1"></iframe></div>
      </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default IndexPage;
