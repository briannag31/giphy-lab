const GifDisplay = ({gf}) => {
        if (gf){
            return <div>
            <>
            <img src={gf.data.images.original.url} alt="gif pic" />
             </>
            </div>
        } else {
            return <h1>Search for  a gif!</h1>
        }
      
    }
export default GifDisplay

