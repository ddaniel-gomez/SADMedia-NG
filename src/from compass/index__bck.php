<!DOCTYPE html>
<html>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Roboto" rel="stylesheet">
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
      <script src="https://www.amcharts.com/lib/3/serial.js"></script>
      <script src="https://www.amcharts.com/lib/3/gantt.js"></script>
      <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
      <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
      <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
      <link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charset="UTF-8"/>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-566895-1', 'auto');
            ga('send', 'pageview');

        </script>
    </head>

    <body>
        <!--navigation-->
        <div class="navbar-fixed">
            <nav class="blue-grey darken-4 text-lighten-5" role="navigation">
                <div class="nav-wrapper container">
                  <a id="logo-container" href="https://www.sadmedia.com" class="brand-logo"><img class="responsive-img" src="img/logotipo_sadmedia.png"></a>
                  <ul class="right hide-on-med-and-down">
                    <li><a href="#index-banner">Home</a></li>
                    <li><a href="#work">Trabajos</a></li>
                    <li><a href="#process">Procesos</a></li>
                    <li><a href="#about">Sobre m&iacute;</a></li>
                    <li><a href="#contact">Contacto</a></li>
                  </ul>

                  <ul id="nav-mobile" class="side-nav">
                    <li><a href="#index-banner">Home</a></li>
                    <li><a href="#work">Trabajos</a></li>
                    <li><a href="#process">Procesos</a></li>
                    <li><a href="#about">Sobre m&iacute;</a></li>
                    <li><a href="#contact">Contacto</a></li>
                  </ul>
                  <a href="#" data-activates="nav-mobile" class="button-collapse right"><i class="material-icons">menu</i></a>
                </div>
            </nav>
        </div>

        <!--index banner-->
        <div class="section" id="index-banner">
            <div class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <br><br>
                        <h2 class="center blue-grey-text"><i class="medium material-icons">nature_people</i></h2>
                        <h1 class="header center teal-text blue-grey-text">Usabilidad y Dise&ntilde;o de Interface sin Contrariedades</h1>
                        <div class="row center">
                          <h5 class="header col s12 orange-text darken-3-text">El dise&ntilde;o como forma de entender la comunicaci&oacute;n digital</h5>
                        </div>
                    </div>
                </div>
                <div class="parallax"><img class="one" src="img/background5.jpg" alt="background img 1"></div>
            </div>

            <!--in short-->
            <div class="container">
                <div class="section scrollme">
                    <!--   Icon Section   -->
                    <div class="row">
                        <div class="col s12 m4 animateme"
                            data-when="enter"
                            data-from="0.4"
                            data-to="0"
                            data-opacity="0"
                            data-scale="2">
                          <div class="icon-block">
                            <h2 class="center blue-grey-text"><i class="large material-icons">room</i></h2>
                            <h5 class="center">Localizaci&oacute;n</h5>
                            <p class="light">Nada como el tratamiento del usuario respecto a su mundo. Ubicaci&oacute;n, tratamiento de los metadatos, realidad aumentada. Geoposicionamiento, publicidad centrada en los intereses de cada persona en cada lugar concreto.</p>
                          </div>
                        </div>

                        <div class="col s12 m4 animateme"
                            data-when="enter"
                            data-from="0.8"
                            data-to="0"
                            data-opacity="0"
                            data-scale="2">
                          <div class="icon-block">
                            <h2 class="center blue-grey-text"><i class="large material-icons">portrait</i></h2>
                            <h5 class="center">Experiencia de usuario</h5>
                            <p class="light">La prioridad en el dise&ntilde;o es la experiencia del usuario que lo consume. Dise&ntilde;ar es facilitar, agilizar, reducir la curva de aprendizaje, reducir soporte t&eacute;cnico, optimizar el rendimiento... usabilidad, usabilidad...</p>
                          </div>
                        </div>

                        <div class="col s12 m4 animateme"
                            data-when="enter"
                            data-from="1"
                            data-to="0"
                            data-opacity="0"
                            data-scale="2">
                          <div class="icon-block">
                            <h2 class="center blue-grey-text"><i class="large material-icons">laptop_mac</i></h2>
                            <h5 class="center">RWD</h5>
                            <p class="light">Dise&ntilde;o responsivo. Donde est&eacute;s, con lo que est&eacute;s. Consume lo que necesites donde lo necesites. Aprovechar cada micromomento del usuario ofreciendo lo que se necesita.</p>
                          </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>

        <!--trabajos-->
        <div class="section" id="work">
            <div class="parallax-container valign-wrapper">
                <div class="section no-pad-bot">
                  <div class="container section scrollme">
                    <div class="row center animateme"
                        data-when="enter"
                        data-from="1"
                        data-to="0"
                        data-opacity="0"
                        data-rotatey="80">
                      <h5 class="header col s12 orange-text darken-3-text">La motivaci&oacute;n es la clave de la vida</h5>
                    </div>
                  </div>
                </div>
                <div class="parallax"><img src="img/background2.jpg" alt="background img 2"></div>
            </div>

            <div class="container">
                <div class="section">
                  <div class="row">
                    <div class="col s12 center">
                      <h3 class="center blue-grey-text"><i class="large material-icons">play_for_work</i></h3>
                      <h4>Trabajos</h4>
                        <p class="left-align light">Tanto como empleado, como freelance, como para amigos, como para m&iacute; mismo, he participado en unos cuantos proyectos. Aqu&iacute; una peque&ntilde;a referencia:</p>
                    </div>
                    <ul class="row scrollme" id="workCards">
                        <!--li class="col s12 m6 l3 animateme" data-when="enter" data-from="1" data-to="0" data-scale="2" data-opacity="0"-->
                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/op3pharmaceuticals.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">OP3</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">OP3 Pharmaceuticals</span>
                                <p>Bolt CMS, twig, Symphony, RWD</p>
                            </div>
                        </div>
                        </li>

                        <!--li class="col s12 m6 l3 animateme" data-when="enter" data-from="1" data-to="0" data-scale="1.8" data-opacity="0"-->
                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/campo4.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Campo4</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Web social de monta&ntilde;a</span>
                                <p>Drupal 7 CMS, RWD, dise&ntilde;o, geolocalizaci&oacute;n, tiempo real...</p>
                            </div>
                        </div>
                        </li>

                        <!--li class="col s12 m6 l3 animateme" data-when="enter" data-from="1" data-to="0" data-scale="1.6" data-opacity="0"-->
                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/avalon.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Avalon Inform&aacute;tica</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Identidad Corporativa</span>
                                <p>Identidad, gesti&oacute;n de contenidos, i18n, ...</p>
                            </div>
                        </div>
                        </li>

                        <!--li class="col s12 m6 l3 animateme" data-when="enter" data-from="1" data-to="0" data-scale="1.4" data-opacity="0"-->
                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/arcadia.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Arcadia Suite</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Experiencia de usuario en aplicaciones de gesti&oacute;n</span>
                                <p>Aplicaci&oacute;n modular de gesti&oacute;n web. Usabilidad, estructuraci&oacute;n de contenidos, gesti&oacute;n completa de la interface.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/rumbo.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Rumbo</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Buscador</span>
                                <p>Propuesta para el buscador avanzado.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/google.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Google</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Skill test</span>
                                <p>Preparaci&oacute;n para una entrevista en Google Zurich.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/quickimage.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">QuickImage</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Banco de im&aacute;genes</span>
                                <p>An&aacute;lisis heur&iacute;stico para relanzar las ventas.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/vodafone.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Vodafone</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">V&iacute;deo interno</span>
                                <p>V&iacute;deos interno de seguridad.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/tfca.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Hogar Digital</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Telef&oacute;nica Soluciones</span>
                                <p>Minisites de producto.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/prenatal.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Prenatal</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Telef&oacute;nica Soluciones</span>
                                <p>Campa&ntilde;as de clientes.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/antivirus.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Antivirus</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Telef&oacute;nica Soluciones</span>
                                <p>Packs de Telef&oacute;nica.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/seguridad.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Seguridad Total</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Telef&oacute;nica Soluciones</span>
                                <p>Packs de producto.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/servicios.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Minisites de Servicios</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Telef&oacute;nica Soluciones</span>
                                <p>Tem&aacute;ticos.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/cuentodeinvierno.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Cuento de invierno</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Single page</span>
                                <p>Landing page RWD.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/quonners.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Quoners</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Toma de decisiones</span>
                                <p>Web social participativa. Buen proyecto.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/blythe.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">BlytheMuseum</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">CMS Art&iacute;stico</span>
                                <p>CMS Drupal para una web art&iacute;stica.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/cibeles.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Cibeles.net</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Identidad para publicaciones</span>
                                <p>Identidad corporativa. Imagen de marca.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/editmaker.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">EditMaker</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Content Management System propio</span>
                                <p>Software propio con sistema propio</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/haffiliation.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Haffiliation</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Sistema de afiliados para venta online</span>
                                <p>Afiliaci&oacute;n para vendedores online.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/pryconsa.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Pryconsa</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Gran constructora inmobiliaria</span>
                                <p>Identidad y frescura sobre una empresa de prestigio.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/islacanela.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Isla Canela</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Una isla al completo</span>
                                <p>Promoci&oacute;n del territorio y la oferta tur&iacute;stica.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/travel2ibiza.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Travel2Ibiza</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Promoci&oacute;n tur&iacute;stica balear</span>
                                <p>Servicios m&aacute;s all&aacute; de los cl&aacute;sicos.</p>
                            </div>
                        </div>
                        </li>

                        <li class="col s12 m6 l3">
                            <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator responsive-img" src="img/work/lashadas.jpg">
                            </div>
                            <div class="card-content">
                                <i class="material-icons right">more_vert</i>
                                <span class="card-title activator grey-text text-darken-4">Las Hadas</span>
                            </div>
                            <div class="card-reveal">
                                <i class="material-icons right">close</i>
                                <span class="card-title grey-text text-darken-4">Escuela infantil certificada</span>
                                <p>Minisite con gesti&oacute;n de usuarios.</p>
                            </div>
                        </div>
                        </li>
                    </ul>
                    <p class="left-align light">Hay m&aacute;s, mucho m&aacute;s, pero se va quedando obsoleto o sin posibilidad de visualizar. Mantengo alguna referencia m&aacute;s en <a href="portfolio/index.html">el tintero</a>.</p>

                  </div>
                </div>
            </div>
            <div class="scrollme">
                <h5 class="center">Cronología laboral</h5>
                <div id="chartdiv" class="animateme"
                    data-when="exit"
                    data-from="1"
                    data-to="0"
                    data-opacity="0"
                    data-rotatex="80"></div>
            </div>
        </div>
        
        <!--procesos-->
        <div class="section" id="process">
            <div class="parallax-container valign-wrapper">
                <div class="section no-pad-bot">
                  <div class="container section scrollme">
                    <div class="row center animateme"
                        data-when="enter"
                        data-from="1"
                        data-to="0"
                        data-opacity="0"
                        data-rotatey="80">
                      <h5 class="header col s12 orange-text darken-3-text">Procesos cognitivos</h5>
                    </div>
                  </div>
                </div>
                <div class="parallax"><img src="img/background7.jpg" alt="background img 4"></div>
            </div>

            <div class="container">
                <div class="section">
                  <div class="row">
                    <div class="col s12 center">
                      <h3 class="center blue-grey-text"><i class="large material-icons">accessibility</i></h3>
                      <h4>Flujos de trabajo</h4>
                        <p class="left-align light">Gestaci&oacute;n y generaci&oacute;n de ideas, resoluci&oacute;n de problemas,... todo el proceso de creaci&oacute;n es parte del proceso cognitivo del usuario.</p>
                    </div>
                    <ul class="row scrollme" id="cogCards">
                            <!--card-->
                            <li class="col s12 m6 animateme" data-when="enter" data-from="1" data-to="0" data-scale="2" data-opacity="0">
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator responsive-img" src="img/work/webapp1.png">
                                    </div>
                                    <div class="card-content">
                                        <i class="material-icons right">more_vert</i>
                                        <span class="card-title activator grey-text text-darken-4">Gesti&oacute;n online</span>
                                    </div>
                                    <div class="card-reveal">
                                        <i class="material-icons right">close</i>
                                        <span class="card-title grey-text text-darken-4">Gesti&oacute;n online</span>
                                        <p>Flujos de trabajo, wireframming, integraci&oacute;n para pantallas gigantes, tablets, m&oacute;viles...</p>
                                    </div>
                                </div>
                            </li>

                            <!--card-->
                            <li class="col s12 m6 animateme" data-when="enter" data-from="1" data-to="0" data-scale="1.8" data-opacity="0">
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator responsive-img" src="img/work/webapp2.png">
                                    </div>
                                    <div class="card-content">
                                        <i class="material-icons right">more_vert</i>
                                        <span class="card-title activator grey-text text-darken-4">Kioskos interactivos</span>
                                    </div>
                                    <div class="card-reveal">
                                        <i class="material-icons right">close</i>
                                        <span class="card-title grey-text text-darken-4">Kioscos interactivos</span>
                                        <p>Flujos de trabajo, wireframming, integraci&oacute;n, etc. en sistemas t&aacute;ctiles de interacci&oacute;n bancaria e informaci&oacute;n.</p>
                                    </div>
                                </div>
                            </li>

                            <!--card-->
                            <li class="col s12 m6 animateme" data-when="enter" data-from="1" data-to="0" data-scale="1.6" data-opacity="0">
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator responsive-img" src="img/work/webapp3.png">
                                    </div>
                                    <div class="card-content">
                                        <i class="material-icons right">more_vert</i>
                                        <span class="card-title activator grey-text text-darken-4">Aplicaciones de escritorio</span>
                                    </div>
                                    <div class="card-reveal">
                                        <i class="material-icons right">close</i>
                                        <span class="card-title grey-text text-darken-4">Aplicaciones JavaFX</span>
                                        <p>Dise&ntilde;o de interfaces para multiplataforma tras estudios de uso y prototipado.</p>
                                    </div>
                                </div>
                            </li>

                            <!--card-->
                            <li class="col s12 m6 animateme" data-when="enter" data-from="1" data-to="0" data-scale="1.4" data-opacity="0">
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator responsive-img" src="img/work/webapp4.png">
                                    </div>
                                    <div class="card-content">
                                        <i class="material-icons right">more_vert</i>
                                        <span class="card-title activator grey-text text-darken-4">RWD</span>
                                    </div>
                                    <div class="card-reveal">
                                        <i class="material-icons right">close</i>
                                        <span class="card-title grey-text text-darken-4">Dise&ntilde;o responsivo</span>
                                        <p>Estructuras responsivas desde pantalla gigante hasta m&oacute;vil. Mediante librer&iacute;as o de creaci&oacute;n propia.</p>
                                    </div>
                                </div>
                            </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>

        <!--sobre mi-->
        <div class="section" id="about">
            <div class="parallax-container valign-wrapper">
                <div class="section no-pad-bot">
                  <div class="container section scrollme">
                    <div class="row center animateme"
                        data-when="enter"
                        data-from="1"
                        data-to="0"
                        data-opacity="0"
                        data-rotatey="80">
                      <h5 class="header col s12 orange-text darken-3-text">Nada es simple, todo debe resultar sencillo</h5>
                    </div>
                  </div>
                </div>
                <div class="parallax"><img src="img/background1.jpg" alt="background img 2"></div>
            </div>

            <div class="container">
                <div class="section">
                  <div class="row">
                    <div class="col s12 center">
                      <h3 class="center blue-grey-text"><i class="large material-icons">public</i></h3>
                      <h4>Sobre m&iacute;</h4>
                        <p class="left-align light">Usabilidad y accesibilidad de aplicaciones y contenidos de aplicaciones, arquitectura de la informaci&oacute;n, portales corporativos, animaci&oacute;n, marketing online, dise&ntilde;o web, posicionamiento SEO, producci&oacute;n y postproducci&oacute;n de v&iacute;deo digital... Muchas han sido las &aacute;reas que durante todos estos a&ntilde;os he tratado, siempre orientado hacia la comunicaci&oacute;n visual en formatos electr&oacute;nicos.</p>
                        <div class="row center">
                          <a href="https://www.sadmedia.com/docs/DanielGomez.pdf" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Ver Curr&iacute;culum</a>
                          <a href="https://www.sadmedia.com/docs/DanielGomez_EN.pdf" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">View Resume</a>
                        </div>
                        <div class="row"></div>
                        <div class="row"></div>
                        <h5 class="center" id="skills">Habilidades que entreno a diario... o casi!</h5>

                        <div class="row">
                            <div class="col s4 m3 l2"><img id="i1" class="icon" src="img/i/h.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i2" class="icon" src="img/i/c.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i3" class="icon" src="img/i/d.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i4" class="icon" src="img/i/l.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i5" class="icon" src="img/i/s.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i6" class="icon" src="img/i/m.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i7" class="icon" src="img/i/jq.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i8" class="icon" src="img/i/b.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i9" class="icon" src="img/i/a.png" alt="image" /></div>
                        </div>
                        <div class="row">
                            <div class="col s4 m3 l2"><img id="i10" class="icon2" src="img/i/ax.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i11" class="icon2" src="img/i/ba.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i12" class="icon2" src="img/i/p.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i13" class="icon2" src="img/i/ai.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i14" class="icon2" src="img/i/ae.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i15" class="icon2" src="img/i/i.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i16" class="icon2" src="img/i/su.png" alt="image" /></div>
                            <div class="col s4 m3 l2"><img id="i17" class="icon2" src="img/i/e.png" alt="image" /></div>
                        </div>
                        <!--div class="row center scrollme">
                            <img id="i1" class="icon animateme" data-when="enter" data-from="0.2" data-to="0" data-rotatey="80" data-opacity="0" src="img/i/h.png" alt="image" />
                            <img id="i2" class="icon animateme" data-when="enter" data-from="0.4" data-to="0.1" data-rotatey="80" data-opacity="0" src="img/i/c.png" alt="image" />
                            <img id="i3" class="icon animateme" data-when="enter" data-from="0.6" data-to="0.2" data-rotatey="80" data-opacity="0" src="img/i/d.png" alt="image" />
                            <img id="i4" class="icon animateme" data-when="enter" data-from="0.8" data-to="0.3" data-rotatey="80" data-opacity="0" src="img/i/l.png" alt="image" />
                            <img id="i5" class="icon animateme" data-when="enter" data-from="1" data-to="0.4" data-rotatey="80" data-opacity="0" src="img/i/s.png" alt="image" />
                            
                            <img id="i6" class="icon animateme" data-when="exit" data-from="0.2" data-to="0" data-rotatey="80" data-opacity="0" src="img/i/m.png" alt="image" />
                            <img id="i7" class="icon animateme" data-when="exit" data-from="0.4" data-to="0.2" data-rotatey="80" data-opacity="0" src="img/i/jq.png" alt="image" />
                            <img id="i8" id="i1" class="icon animateme" data-when="exit" data-from="0.6" data-to="0.3" data-rotatey="80" data-opacity="0" src="img/i/b.png" alt="image" />
                            <img id="i9" class="icon animateme" data-when="exit" data-from="0.8" data-to="0.4" data-rotatey="80" data-opacity="0" src="img/i/a.png" alt="image" />
                        </div>
                        <div class="row center scrollme">
                            <img id="i10" class="icon2 animateme" data-when="enter" data-from="0.5" data-to="0" data-rotatey="80" data-opacity="0" src="img/i/ax.png" alt="image" />
                            <img id="i11" class="icon2 animateme" data-when="enter" data-from="0.6" data-to="0.1" data-rotatey="80" data-opacity="0" src="img/i/ba.png" alt="image" />
                            <img id="i12" class="icon2 animateme" data-when="enter" data-from="0.7" data-to="0.2" data-rotatey="80" data-opacity="0" src="img/i/p.png" alt="image" />
                            <img id="i13" class="icon2 animateme" data-when="enter" data-from="0.8" data-to="0.3" data-rotatey="80" data-opacity="0" src="img/i/ai.png" alt="image" />
                            <img id="i14" class="icon2 animateme" data-when="enter" data-from="0.9" data-to="0.4" data-rotatey="80" data-opacity="0" src="img/i/ae.png" alt="image" />
                            <img id="i15" class="icon2 animateme" data-when="enter" data-from="0.9" data-to="0.5" data-rotatey="80" data-opacity="0" src="img/i/i.png" alt="image" />
                            <img id="i16" class="icon animateme" data-when="enter" data-from="1" data-to="0.6" data-rotatey="80" data-opacity="0" src="img/i/su.png" alt="image" />
                            <img id="i17" class="icon animateme" data-when="enter" data-from="1" data-to="0.7" data-rotatey="80" data-opacity="0" src="img/i/e.png" alt="image" />
                        </div-->
                    </div>
                  </div>
                </div>
            </div>
        </div>

        <!--contacto-->
        <div class="section" id="contact">
            <div class="parallax-container valign-wrapper">
                <div class="section no-pad-bot">
                  <div class="container section scrollme">
                    <div class="row center animateme"
                        data-when="enter"
                        data-from="1"
                        data-to="0"
                        data-opacity="0"
                        data-rotatey="80">
                      <h5 class="header col s12 orange-text darken-3-text">Los seres humanos son el potencial b&aacute;sico de todo el proceso</h5>
                    </div>
                  </div>
                </div>
                <div class="parallax"><img src="img/background6.jpg" alt="background img 6"></div>
            </div>

            <div class="container">
                <div class="section">
                  <div class="row">
                    <div class="col s12 center">
                      <h3 class="center blue-grey-text"><i class="large material-icons">send</i></h3>
                      <h4>Contacta</h4>
                      <p class="left-align light">Si quieres hablamos sobre proyectos. Siempre estoy abierto a nuevos retos. Quieres materializar algo online? Seguramente podamos ponernos de acuerdo ;-)</p>
                        <form class="col s12" action="sendEmail.php" method="post">
                            <div class="row">
                                <div class="input-field col s12 m6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="name" type="text" name="name" class="validate" required="" aria-required="true">
                                    <label for="last_name"><sup>*</sup>Nombre</label>
                                </div>
                                <div class="input-field col s12 m6">
                                    <i class="material-icons prefix">email</i>
                                    <input id="email" type="email" name="email" class="validate" required="" aria-required="true">
                                    <label for="last_name"><sup>*</sup>Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">subject</i>
                                    <input id="subject" type="text" name="subject" class="validate">
                                    <label for="last_name">Asunto</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">mode_edit</i>
                                    <textarea id="message" name="message" class="materialize-textarea"></textarea>
                                    <label for="last_name"><sup>*</sup>Mensaje</label>
                                </div>
                            </div>
                            <div class="row">
                              <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
                                <i class="material-icons right">send</i>
                              </button>
                            </div>
                        </form>
                    </div>
                  </div>
                </div>
            </div>
            <div style="margin-bottom: -15px;">
                <div id="map"></div>
            </div>
        </div>
    
        <!--footer-->
        <footer class="page-footer teal blue-grey darken-4 text-lighten-5">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">In short</h5>
                  <p class="grey-text text-lighten-4"><strong>SADMedia, desarrollos a medida</strong><br/>
                        <em>Usabilidad y Dise&ntilde;o de Interface sin Contrariedades</em><br/><br/>
                        Daniel G&oacute;mez<br/>
                        C/ Francisco Rivas, 1.<br/>
                        Torrelodones 28250 [Madrid]<br/>
                        676 868 046<br/>
                        ddaniel.gomez@gmail.com</p>
                    <p class="social">
                        <a href="https://www.facebook.com/ddaniel.gomez"><img src="img/facebook.png" alt="facebook" /></a>
                        <a href="https://plus.google.com/u/0/+DanielG%C3%B3mezM"><img src="img/g+.png" alt="G+" /></a>
                        <a href="https://www.linkedin.com/in/ddanielgomez/"><img src="img/linkedin.png" alt="LinkedIn" /></a>
                    </p>
                </div>
                <div class="col l6 s12 center">
                  <h5 class="white-text">Drupal member</h5>
                  <img class="drupalcon" src="img/Drupal_Association_ind_member_217.png" />
                  <p class="white-text"><i class="material-icons" style="vertical-align: sub;">dashboard</i> Drupal builder from 2006</p>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container"></div>
            </div>
        </footer>
        

      <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/jquery.scrollme.min.js"></script>
      <script type="text/javascript" src="js/init.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxvNKWyJxHsUyT4D6PkMWer0Sy05-PD-4&callback=initMap" async defer></script>
      <?php
        
        $mailStatus = $_GET['mail'];
        if($mailStatus == 'success'){
            echo '<script>Materialize.toast("Estupendo! Te contacto en cuanto pueda, gracias.", 4000, "light-green")</script>';
        }
      ?>
    </body>
</html>