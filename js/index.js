class NavVar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="main-header" class="bee-row bee-row-header">
      <div class="bee-row-content">
          <div id="logo-samsung" class="bee-col bee-col-1 bee-col-w2">
              <div class="bee-block bee-block-1 bee-image">
                  <img alt="Logo samsung" class="bee-center bee-fixedwidth bee-fullwidthOnMobile"
                      src="img/SamsungLogo.gif" style="max-width:166px;" />
              </div>
          </div>
          <div class="bee-col bee-col-2 bee-col-w10">
              <div class="bee-block bee-block-1 bee-menu">
                  <nav class="bee-menu">
                      <input class="bee-hamburger-trigger" id="bee-hamburger-m121" type="checkbox" />
                      <label class="bee-hamburger-controls" for="bee-hamburger-m121">
                          <span class="bee-hamburger-open">
                          </span>
                          <span class="bee-hamburger-close">
                          </span>
                      </label>
                      <ul class="bee-horizontal with-bee-hamburger">
                          <li>
                              <a id="menu1" class="sortType" href="./index.html" target="_self" title="CES 2023">
                                  CES 2023</a>
                          </li>
                          <li>
                              <a  id="menu2" class="sortType" href="./institucional.html" target="_self" title="ACERCA">
                                  QUIENES SOMOS</a>
                          </li>
                          <li>
                              <a id="menu3" class="sortType" href="./novedades.html" target="_self" title="NOVEDADES">
                                  NOVEDADES</a>
                          </li>
                          <li>
                              <a  id="menu4" class="sortType" href="./contacto.html" target="_self" title="CONTACTO">
                                  CONTACTO</a>
                          </li>
                          <li>
                              <a id="menu5" class="sortType" href="./streaming.html" target="_self" title="STREAMING">
                                  STREAMING</a>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>
      </div>
  </div>
      `
    }
  }
  
  //Footer
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <div class="bee-row bee-row-footer">
            <div class="bee-row-content" style="justify-content: center;">
                <div class="bee-col bee-col-1 bee-col-w1">
                    <div class="bee-block bee-block-1 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-2 bee-col-w3">
                    <div class="bee-block bee-block-1 bee-social">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: center;">
                                <span style="font-size: 22px; line-height: 28px;">
                                    DISEÑO Y DESARROLLO WEB
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF;width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-text">
                        <div class="bee-text-content"
                            style="line-height: 150%; font-size: 12px; font-family: inherit; color: #fff; text-align: center;">
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    GOMEZ LOPEZ TAHIEL - 1141103
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    HUARINGA EDUARDO - 1121478
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    JALDIN WALTER - 1155940
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    NOGUERA CHRISTIAN - 1020585
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    QUINTANA PABLO - 1120936
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px; float:right">
                                <span style="font-size: 16px; line-height: 32px;">
                                    GRUPO 3
                                </span>
                            </p>
        
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-2 bee-col-w3">
                    <div class="bee-block bee-block-1 bee-text">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: center;">
                                <span style="font-size: 22px; line-height: 28px;">
                                    MEDIA & LINKS
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF;width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-text">
                        <div class="bee-text-content"
                            style="line-height: 200%; font-size: 12px; font-family: inherit; color: #fff; text-align: center;">
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    <a href="./index.html" style="text-decoration:none;color:white;" target="_self"
                                        title="STREAMING">
                                        STREAMING</a>
                                </span>
                            </p>
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    <a href="./contacto.html" style="text-decoration:none;color:white;" target="_self"
                                        title="CONTACTO">
                                        NUESTRAS REDES</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-social">
                        <div class="content" style="text-align: center;">
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.facebook.com/">
                                    <img alt="Facebook" src="img/facebook2x.png" title="facebook" /></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.twitter.com/">
                                    <img alt="Twitter" src="img/twitter2x.png" title="twitter" /></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.linkedin.com/">
                                    <img alt="Linkedin" src="img/linkedin2x.png" title="linkedin" /></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.instagram.com/">
                                    <img alt="Instagram" src="img/instagram2x.png" title="instagram" /></a>
                            </span>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-social">
                        <div class="content" style="text-align: center;">
                            <span class="icon" style="padding:10px 10px 10px 10px; align-self: center">
                                <a href="https://www.uade.edu.ar/">
                                    <img alt="Logo uade" src="img/uade-logo.png"></a>
                            </span>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-4 bee-col-w3">
                    <div class="bee-block bee-block-1 bee-text">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: center;">
                                <span style="font-size: 24px; line-height: 28px;">
                                    NEWSLETTER
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF; width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-form">
                        <form accept-charset="UTF-8" action="ACTION_PLACEHOLDER" autocomplete="on" enctype="multipart/form-data"
                            method="post" target="_self">
                            <div class="bee-form-row">
                                <div class="bee-field bee-field-id_qos9oa">
                                    <label for="id_qos9oa">
                                        Suscríbete para mas informacion
                                    </label>
                                    <input id="id_qos9oa" name="email" required="" type="text" />
                                </div>
                            </div>
                            <div class="bee-form-row">
                                <div class="bee-field bee-field-id_rq8uem">
                                    <div class="bee-button-container">
                                        <button id="id_rq8uem" name="submit" type="submit" value="SIGN IN">
                                            Suscribirse
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="bee-block bee-block-4 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        `
      
    }
  }
  
  customElements.define('main-header', NavVar);
  customElements.define('main-footer', Footer);
class NavVar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="main-header" class="bee-row bee-row-header">
      <div class="bee-row-content">
          <div id="logo-samsung" class="bee-col bee-col-1 bee-col-w2">
              <div class="bee-block bee-block-1 bee-image">
                  <img alt="Logo samsung" class="bee-center bee-fixedwidth bee-fullwidthOnMobile"
                      src="img/SamsungLogo.gif" style="max-width:166px;" />
              </div>
          </div>
          <div class="bee-col bee-col-2 bee-col-w10">
              <div class="bee-block bee-block-1 bee-menu">
                  <nav class="bee-menu">
                      <input class="bee-hamburger-trigger" id="bee-hamburger-m121" type="checkbox" />
                      <label class="bee-hamburger-controls" for="bee-hamburger-m121">
                          <span class="bee-hamburger-open">
                          </span>
                          <span class="bee-hamburger-close">
                          </span>
                      </label>
                      <ul class="bee-horizontal with-bee-hamburger">
                          <li>
                              <a href="./index.html" target="_self" title="EXPLORE DISCOUNTS">
                                  CES 2023</a>
                          </li>
                          <li>
                              <a href="./institucional.html" target="_self" title="CATEGORIES">
                                  QUIENES SOMOS</a>
                          </li>
                          <li>
                              <a href="./novedades.html" target="_self" title="INSTRUCTORS">
                                  NOVEDADES</a>
                          </li>
                          <li>
                              <a href="./contacto.html" target="_self" title="TIPS BLOG">
                                  CONTACTO</a>
                          </li>
                          <li>
                              <a href="./index.html" target="_self" title="TESTIMONIALES">
                                  STREAMING</a>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>
      </div>
  </div>
      `
    }
  }
  
  //Footer
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <div class="bee-row bee-row-footer">
            <div class="bee-row-content" style="justify-content: center;">
                <div class="bee-col bee-col-1 bee-col-w1">
                    <div class="bee-block bee-block-1 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-2 bee-col-w3">
                    <div class="bee-block bee-block-1 bee-social">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: center;">
                                <span style="font-size: 22px; line-height: 28px;">
                                    DISEÑO Y DESARROLLO WEB
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF;width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-text">
                        <div class="bee-text-content"
                            style="line-height: 150%; font-size: 12px; font-family: inherit; color: #fff; text-align: center;">
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    GOMEZ LOPEZ TAHIEL - 1141103
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    HUARINGA EDUARDO - 1121478
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    JALDIN WALTER - 1155940
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    NOGUERA CHRISTIAN - 1020585
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    QUINTANA PABLO - 1120936
                                </span>
                            </p>
                            <p style="font-size: 10px; line-height: 32px; float:right">
                                <span style="font-size: 16px; line-height: 32px;">
                                    GRUPO 3
                                </span>
                            </p>
        
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-2 bee-col-w3">
                    <div class="bee-block bee-block-1 bee-text">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: center;">
                                <span style="font-size: 22px; line-height: 28px;">
                                    MEDIA & LINKS
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF;width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-text">
                        <div class="bee-text-content"
                            style="line-height: 200%; font-size: 12px; font-family: inherit; color: #fff; text-align: center;">
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    <a href="./index.html" style="text-decoration:none;color:white;" target="_self"
                                        title="STREAMING">
                                        STREAMING</a>
                                </span>
                            </p>
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    <a href="./contacto.html" style="text-decoration:none;color:white;" target="_self"
                                        title="CONTACTO">
                                        NUESTRAS REDES</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-social">
                        <div class="content" style="text-align: center;">
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.facebook.com/CES/">
                                    <img alt="Facebook" src="img/facebook2x.png" title="facebook" /></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://twitter.com/CES">
                                    <img alt="Twitter" src="img/twitter2x.png" title="twitter" /></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.instagram.com/ces/?hl=en">
                                    <img alt="Instagram" src="img/instagram2x.png" title="instagram" /></a>
                            </span>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-social">
                        <div class="content" style="text-align: center;">
                            <span class="icon" style="padding:10px 10px 10px 10px; align-self: center">
                                <a href="https://www.uade.edu.ar/">
                                    <img alt="Logo uade" src="img/uade-logo.png"></a>
                            </span>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-4 bee-col-w3">
                    <div class="bee-block bee-block-1 bee-text">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: center;">
                                <span style="font-size: 24px; line-height: 28px;">
                                    NEWSLETTER
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF; width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-form">
                        <form accept-charset="UTF-8" action="ACTION_PLACEHOLDER" autocomplete="on" enctype="multipart/form-data"
                            method="post" target="_self">
                            <div class="bee-form-row">
                                <div class="bee-field bee-field-id_qos9oa">
                                    <label for="id_qos9oa">
                                        Suscríbete para mas informacion
                                    </label>
                                    <input id="id_qos9oa" name="email" required="" type="text" />
                                </div>
                            </div>
                            <div class="bee-form-row">
                                <div class="bee-field bee-field-id_rq8uem">
                                    <div class="bee-button-container">
                                        <button id="id_rq8uem" name="submit" type="submit" value="SIGN IN">
                                            Suscribirse
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="bee-block bee-block-4 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        `
      
    }
  }
  
  customElements.define('main-header', NavVar);
  customElements.define('main-footer', Footer);