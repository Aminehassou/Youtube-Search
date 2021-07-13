
function Video(props) {
    
  return (
    <div>
    <a href={props.link}>
    <img src={props.thumbnail}/> <br />
    </a>
    {props.title}
    </div>
  )}

export default Video;
