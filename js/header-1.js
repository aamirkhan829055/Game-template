if (document.getElementById("header")) {
    document.getElementById("header").innerHTML = `   
    
    <header class="head-1">
        <section class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="content-5">
                            <div class="left-content">
                                <ul class="left-list">
                                    <li>
                                        <p>
                                            <i class="fas fa-headset"></i> Support
                                        </p>
                                    </li>
                                </ul>
                                <ul class="top-social-links">
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="right-content">
                                <ul class="right-list">
                                    <li>
                                        <div class="language-selector">
                                            <select name="language" class="language" fdprocessedid="0oyhl">
                                                <option value="1">EN</option>
                                                <option value="2">IN</option>
                                                <option value="3">BN</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="notofication message" data-toggle="modal"
                                            data-target="#usernotification">
                                            <i class="far fa-bell"></i>
                                        </div>
                                    </li>
                                    <li class="border-0">
                                        <div class="message" data-toggle="modal" data-target="#usermessage">
                                            <i class="far fa-envelope"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light  navbar-dark p-0 py-2">
                <a class="navbar-brand" href="#"><img src="images/logo.png" alt="" class=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto list-items">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle links" href="index.html" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home    
                            </a>
                            <div class="dropdown-menu list-ul-bg" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="./index.html"> <i class="fa-solid fa-angles-right"></i> Home 1</a>
                                <a class="dropdown-item" href="./index.html"> <i class="fa-solid fa-angles-right"></i> Home 2</a>
                                <!-- <div class="dropdown-divider"></div> -->
                                <a class="dropdown-item" href="./index.html"><i class="fa-solid fa-angles-right"></i> Home 3</a>
                                <a class="dropdown-item" href="./index.html"><i class="fa-solid fa-angles-right"></i> Home 4</a><a
                                    class="dropdown-item" href="./index.html"><i class="fa-solid fa-angles-right"></i> Home 5</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white list-a" href="./about.html">Raffles</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="./games.html" class="nav-link text-white list-a">
                                Games
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white list-a" href="./tournaments.html">Tournaments</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle list-a text-white" href="#" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </a>
                            <div class="dropdown-menu list-ul-bg" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"> <i class="fa-solid fa-angles-right"></i> About</a>
                                <a class="dropdown-item" href="#"> <i class="fa-solid fa-angles-right"></i> Bonuse</a>
                                <!-- <div class="dropdown-divider"></div> -->
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i> Ticket
                                    Page</a>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i> Raffles
                                    Details</a>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i>
                                    Games Details </a>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i>
                                    Tournaments Details </a>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i>
                                    Gamer Profile Public </a>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i>
                                    Gamer Problie Private </a>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i>
                                    Help </a>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-angles-right"></i>
                                    404 </a>
                            </div>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link text-white list-a" href="./contact.html">Contact</a>
                        </li>
                    </ul>

                    <a href="./login.html" class="play-button text-white uppercase">JOIN US</a>

                </div>
            </nav>
        </div>

    </header>    `;
}
