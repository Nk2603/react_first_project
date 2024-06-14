function Contact(){
    let handleform = (Event)=>{
        console.log(Event);
    }
    return(
        <>        
        <>        
<form action="" onClick={handleform()}>
  <div className="form-floating mb-3">
    <input
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input
      type="password"
      className="form-control"
      id="floatingPassword"
      placeholder="Password"
    />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <button type="submit">submit</button>
  </form>
</>
        </>
    )
    
}
export default Contact;