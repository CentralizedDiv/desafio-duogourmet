const styles = () => ( {
  header: {
    width:'100%', 
    height:'300px',
    backgroundColor:'#000'
  },
  titleHeader: {
    margin:0,
    justifyContent:'center',
    display:'flex',
    marginTop:'-15px',
    fontSize:'25px',
    color:'#fff'
  },
  imageHeader: {
    display:  'flex',
    margin:  'auto',
    paddingTop: '50px',
    maxWidth:'80%'
  },
  filter: {
    width:'80%',
    borderRadius:'3px',
    padding:'20px 20px 0px 20px',
    marginTop:'-30px',
    backgroundColor:'#fff',
    boxShadow:'0 2px 20px 0 rgba(0, 0, 0, 0.14), 0 3px 20px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'
  },
  cardTitleText: {   
    marginBottom:'-10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  stars: {
    width: '140px',
    float: 'left'
  },
  starsRating: {
    fontWeight:'bold'
  },
  distance: {
    marginTop:'-35px',
    display:'inline',    
    float:'right'
  },
  distanceText: {
    margin:0,
    float:'right'
  },
  distanceIcon: {
    float:'left'
  }
}); 

export default styles;