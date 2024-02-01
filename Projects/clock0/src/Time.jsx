function Time(){
  let time =new Date();
  return <p>Current time:{time.toLocaleDateString()}-{""}{time.toLocaleTimeString()} </p>
}
export default Time;