import Iframe from 'react-iframe';

function NFTPage() {
    return (
      <div className="">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Marketplace</h1></section>
        <Iframe url='https://opensea.io/collection/voxel-creations-fillmore-xr?embed=true'
        width='100%'
        height='1500px'
        scrolling="no"
        id="iFrame"
        position="relative"
        overflow= "visible"
        styles={{minHeight: "500px"}}/>
      </div>
    );
  }
  
  export default NFTPage;