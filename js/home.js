class NavVar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="main-header" class="bee-row bee-row-header">
      <div class="bee-row-content">
          <div class="bee-col bee-col-1 bee-col-w2">
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
                              <a href="./home.html" target="_self" title="EXPLORE DISCOUNTS">
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
                              <a href="./home.html" target="_self" title="TESTIMONIALES">
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
            <div class="bee-row-content">
                <div class="bee-col bee-col-1 bee-col-w1">
                    <div class="bee-block bee-block-1 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-2 bee-col-w3">
                    <div class="bee-block bee-block-4 bee-social">
                        <div class="content">
                             <div class="bee-text-content"
                                style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                                <p style="font-size: 14px; line-height: 16px; text-align: left;">
                                    <span style="font-size: 24px; line-height: 28px;">
                                        DISEÑO Y DESARROLLO WEB - GRUPO 6 
                                    </span>
                                    <span class="icon" style="padding:0 10px 0 10px;">
                                        <a href="https://www.uade.edu.ar/">
                                            <img alt="Logo uade" src="img/uade-logo.png"></a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF;width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-text">
                        <div class="bee-text-content"
                            style="line-height: 200%; font-size: 12px; font-family: inherit; color: #fff;">
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    GOMEZ LOPEZ TAHIEL - 1141103
                                </span>
                            </p>
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    HUARINGA EDUARDO - 1121478
                                </span>
                            </p>
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    JALDIN WALTER - 1155940
                                </span>
                            </p>
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    NOGUERA CHRISTIAN - 1020585
                                </span>
                            </p>
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    QUINTANA PABLO - 1120936
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-3 bee-col-w3">
                    <div class="bee-block bee-block-1 bee-text">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: left;">
                                <span style="font-size: 24px; line-height: 28px;">
                                    HERE WE ARE
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
                            style="line-height: 200%; font-size: 12px; font-family: inherit; color: #fff;">
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    Mail: info@company.com
                                </span>
                            </p>
                            <p style="font-size: 16px; line-height: 32px;">
                                <span style="font-size: 16px; line-height: 32px;">
                                    Tel:
                                    <a href="tel:900500400" rel="noopener"
                                        style="text-decoration: none; color: #ffffff;" target="_blank"
                                        title="tel:900500400">
                                        900 500 400</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-4 bee-social">
                        <div class="content">
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.facebook.com/">
                                    <img alt="Facebook"
                                        src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/facebook@2x.png"
                                        title="facebook"></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.twitter.com/">
                                    <img alt="Twitter"
                                        src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/twitter@2x.png"
                                        title="twitter"></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.linkedin.com/">
                                    <img alt="Linkedin"
                                        src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png"
                                        title="linkedin"></a>
                            </span>
                            <span class="icon" style="padding:0 10px 0 10px;">
                                <a href="https://www.instagram.com/">
                                    <img alt="Instagram"
                                        src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png"
                                        title="instagram"></a>
                            </span>
                        </div>
                    </div>
                    <div class="bee-block bee-block-5 bee-divider">
                        <div class="spacer" style="height:0px;">
                        </div>
                    </div>
                </div>
                <div class="bee-col bee-col-4 bee-col-w4">
                    <div class="bee-block bee-block-1 bee-text">
                        <div class="bee-text-content"
                            style="font-size: 14px; line-height: 120%; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #ffffff;">
                            <p style="font-size: 14px; line-height: 16px; text-align: left;">
                                <span style="font-size: 24px; line-height: 28px;">
                                    NEWSLETTER
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="bee-block bee-block-2 bee-divider">
                        <div class="center" style="border-top:1px solid #FFFFFF;width:100%;">
                        </div>
                    </div>
                    <div class="bee-block bee-block-3 bee-form">
                        <form accept-charset="UTF-8" action="ACTION_PLACEHOLDER" autocomplete="on"
                            enctype="multipart/form-data" method="post" target="_self">
                            <div class="bee-form-row">
                                <div class="bee-field bee-field-id_suzk8g">
                                    <label for="id_suzk8g">
                                        Suscr&iacute;bete para mas informacion
                                    </label>
                                    <input id="id_suzk8g" name="email" required type="text">
                                </div>
                            </div>
                            <div class="bee-form-row">
                                <div class="bee-field bee-field-id_j4sgoa">
                                    <div class="bee-button-container">
                                        <button id="id_j4sgoa" name="submit" type="submit" value="SIGN IN">
                                            SIGN IN
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
                <div class="bee-col bee-col-5 bee-col-w1">
                </div>
            </div>
        </div>
  
        `
      
    }
  }
  
  customElements.define('main-header', NavVar);
  customElements.define('main-footer', Footer);