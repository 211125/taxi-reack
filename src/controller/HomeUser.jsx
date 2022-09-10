import "../style/Style.css";
import call from "../Img/llamada.png";
import profail from "../Img/perfil.png";

const HomeUser = () => {
  return(
      <div>
          <form className="from">

              <div className="user">
                  <img className="derecha profile" src={profail}/>

                      <aside> <h1 className="black text-bold-font" >SafeTrasport</h1>
                      </aside>

                  <h2 className="users text-bold-font" >Users</h2>
              </div>


              <div className="taxistas ">
                  <img className="izquierda profile"
                       src={profail}/>
                  <aside>
                      <h6 className="black">Osvaldo Angel Hernandez Gutierrez</h6 >
                      <h6 className="black-rgb">06:32pm aug 09</h6 >
                      <div className="estrellitas">



                          <input id="radio1" type="radio" name="" value="5"/>
                          <label htmlFor="radio1">★</label>
                          <input id="radio2" type="radio" name="estrellas" value="4"/>
                          <label htmlFor="radio2">★</label>
                          <input id="radio3" type="radio" name="estrellas" value="3"/>
                          <label htmlFor="radio3">★</label>
                          <input id="radio4" type="radio" name="estrellas" value="2"/>
                          <label htmlFor="radio4">★</label>
                          <input id="radio5" type="radio" name="estrellas" value="1"/>
                          <label htmlFor="radio5">★</label>

                      </div>
                  </aside>

                  <div className="reset"></div>
              </div>
              <div className="taxistas ">
                  <img className="izquierda profile"
                       src={profail}/>
                  <aside>
                      <h6 className="black">Osvaldo Angel Hernandez Gutierrez</h6 >
                      <h6 className="black-rgb">06:32pm aug 09</h6 >
                      <div className="estrellitas">



                          <input id="radio1" type="radio" name="" value="5"/>
                          <label htmlFor="radio1">★</label>
                          <input id="radio2" type="radio" name="estrellas" value="4"/>
                          <label htmlFor="radio2">★</label>
                          <input id="radio3" type="radio" name="estrellas" value="3"/>
                          <label htmlFor="radio3">★</label>
                          <input id="radio4" type="radio" name="estrellas" value="2"/>
                          <label htmlFor="radio4">★</label>
                          <input id="radio5" type="radio" name="estrellas" value="1"/>
                          <label htmlFor="radio5">★</label>

                      </div>
                  </aside>

                  <div className="reset"></div>
              </div>



          <div className="barra-logo fotos">

          <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="90" fill="currentColor"
               className="bi bi-house-door" viewBox="0 0 16 16">
              <path
                  d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
          </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="90" fill="currentColor"
                   className="bi bi-qr-code-scan" viewBox="0 0 16 16">
                  <path
                      d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                  <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                  <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                  <path
                      d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                  <path d="M12 9h2V8h-2v1Z"/>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="90" fill="currentColor"
                   className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                  <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
              </svg>
          </div>
          </form>
      </div>
  )
}
export default HomeUser;