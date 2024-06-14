function Slidebar(){
    return(
        <>
 <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.akz0hTxRH7ofWzOzjjH3zQHaDn&pid=Api&P=0&h=180"
        className="d-block w-100"
        alt="..."
      />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.Jg35DTU8xEFi-BbUaql9CQHaEI&pid=Api&P=0&h=180"
        className="d-block w-100"
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.v-dSHdKjCRHAE3o76L7Q0QHaEK&pid=Api&P=0&h=180"
        className="d-block w-100"
        alt="..."
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}
export default Slidebar
