function Card(){
    let title = "Nisha Kumari"
    let para = " 19 year old full stack developer.Member of Idiot Developer"
    let count = 2
    let items =[{title:"Nisha Kumari",para:"19 year old full stack developer.Member of Idiot Developer"},{title:"Nisha Kumari",para:"19 year old full stack developer.Member of Idiot Developer"},{title:"Nisha Kumari",para:"19 year old full stack developer.Member of Idiot Developer"},{title:"Nisha Kumari",para:"19 year old full stack developer.Member of Idiot Developer"},{title:"Nisha Kumari",para:"19 year old full stack developer.Member of Idiot Developer"},{title:"Nisha Kumari",para:"19 year old full stack developer.Member of Idiot Developer"}]
    return(
        <>
      <div className="row my-4">
     {items.map((item,index)=>(   //predefined array loop function map means repetition acc to array index number
        <div className="card col-6 mx-5 my-3 " style={{ width: "18rem" }}>
        <img src="https://tse1.mm.bing.net/th?id=OIP.y0s6h5LOHFgmm5Lh2IPEfgHaEo&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.para}
          </p>
        </div>
      </div>
     ))} 
     </div>  
    </>
    )
}
export default Card