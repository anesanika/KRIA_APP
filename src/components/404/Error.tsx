import errorImage from '../../assets/first-layer.png';


function Error(){
  return(
    <div className="error-cont" 
    style={
      {
        width: '100%',
        height: '100vh',
        backgroundColor: '#1b1e61',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        position: 'relative',
        color: '#fff',
        flexDirection: 'column',
        fontSize: '40px',
        fontFamily : 'arialF',
        overflow: 'hidden'
      }
    }

    >
      <h1>404</h1>
      <p> Page Not Found ;( </p>
      <img src={errorImage} alt="errImg"
      style={{
        position: 'absolute',
        width: '30%',
        bottom: '0',
        right: '0'
      }}
      />
    </div>
  );
}

export default Error