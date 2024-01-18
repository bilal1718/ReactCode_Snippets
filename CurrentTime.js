export default function Clock() {
  const timeStyle = {
    fontFamily: 'sans-serif',
    width: 'max-content',
    height: 'max-content',
    fontSize: '3rem',
    color: 'white',
    backgroundColor: 'black',
  };
const d = new Date();
  let hour = d.getHours() % 12;
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  return( 
    <div style={timeStyle} className="time">
      {hour}:{minutes}:{seconds}
    </div>
  );
}
