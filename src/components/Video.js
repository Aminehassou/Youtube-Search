
function Video(props) {
    
  return (
    <div className="video-item">
    <a href={props.link}>
    <img src={props.thumbnail} alt="Youtube Video"/> <br />
    <span dangerouslySetInnerHTML={{__html: props.title}} />
    </a>
    </div>
  )}

export default Video;