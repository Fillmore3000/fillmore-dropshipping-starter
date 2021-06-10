import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const videoSource = "https://www.henryapaw.com/test/video-bg-new.mp4";
const modelPath = "/assets/models/gltf/HennyX-v2.gltf";

function ServicePage() {
  return (
    <div className="pb-6 md:pb-12 ">
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Service Breakdown</h1>
      <h4></h4>
      </section>
      <Container>
        <Row noGutters>
          <Col xs={12} sm={6} md={6}>
      <h2 className="text-3xl mb-3 home-3">Voxel Art/Animation</h2>
      <model-viewer camera-controls camera-orbit="180deg 90deg" autoplay   shadow-intensity="1" src={modelPath} type="gtlf" style={{ width:'100%', position: 'relative', zIndex: '99', minHeight: '400px'}} alt=""/>
      <p>
      We love art, we love creating! To start with 1 cube and a to end with a whole world. 
      The possibilities are endless, and the community is growing and vibrant and we enjoy playing <br/>our part. 
      </p></Col>
      <Col xs={12} sm={6} md={6}>
      <h2 className="text-3xl mb-3 home-h3">Voxel Digital Assets</h2>
      <img
                      className="w-full  fill-current"
                      src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685507/digi-assetpic_umoxmq.png"
                      role="presentation"
                    />
      <p>
      Due to the hign demand of digital assets we partnered with Opensea.
      The first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). 
      Buy, sell, and discover exclusive digital assets.
      </p></Col>
    </Row>
    <Row noGutters>
          <Col xs={12} sm={6} md={6}>
      <h2 className="text-3xl mb-3 home-3">Commissions</h2>
      <img
                      className="w-full fill-current"
                      src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685507/com-pic_jw8z9n.jpg"
                      role="presentation"
                    />
      <p>
      All our projects start with a call or meeting to discuss what you want to create, 
      and what you hope it will achieve. Because deal in new technologies, there 
      are often misconceptions about what it can and cannot do, and so our role at this point out and
      to be clear and honest about your idea, whilst offering suggestions on how the project might work.
      </p></Col>
      <Col xs={12} sm={6} md={6}>
      <h2 className="text-3xl mb-3 home-3">Gaming/Software</h2>
      <video autoPlay={true} loop="loop" muted  className="Video">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      <p>
      Our industry experience delivers the most innovative online AR and 3D software built 
      for all platforms. From prototyping an idea to launching the web portal with enterprise-grade 
      features — we will take care of the entire web development for your business.
      </p></Col></Row>
      </Container>
    </div>
  );
}

export default ServicePage;
