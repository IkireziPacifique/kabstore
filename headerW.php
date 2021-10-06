<html lang="en"> 
<head>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <link rel="stylesheet" href="css/css/all.min.css">
    <link rel="stylesheet" href="css/header.css">
</head>
<style>
    .navbar, .sm-navbar{
        background-color: #f1f1f1;
    }

    .navbtn .search-bar{
        background-color: white;
        color: #f1f1f1;
    }

    .navbar-links li a:hover, .navbtn i:hover{
        color: #2C2C2C;
}
}
</style>
<body>
    <!-- navigation bar -->
    <!-- lg-screen -->
    <nav class="navbar">      
        <div class="logo">
            <a href="index.php"><img src="images/favicon-black.PNG" alt="kabstore-logo" class="logo-container" width="100%" height="100%"></a>
        </div>

        <div class="navbar-links">
            <ul class="navmenu">
                <li><a href="index.php" class="menu">Home</a></li>
                <li><a href="about.php" class="menu">About</a></li>
                <li><a href="store.php" class="menu">Store</a></li>
                <li><a href="contact.php" class="menu">Contact</a></li>
            </ul>

            <ul class="navbtn">
                <input type="text" placeholder="Search" class="search-bar">
                <i class="fas fa-search search-icon"></i>
                <i class="fas fa-shopping-bag"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            </ul>
        </div>

    </nav>

    <!-- sm-screen -->
    <nav class="sm-navbar">
        <div class="nav-btns">
            <div>
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
            </div>
            
                
            <div class="logo">
                <a href="index.php"><img src="images/favicon.PNG" alt="kabstore-logo" class="logo-container" width="100%" height="100%"></a>
            </div>

            <!-- <a href="cart-sm"> -->
            <div class="cart-icon">
                <span class="fas fa-2x fa-shopping-bag"></span>
            </div>
            <!-- </a> -->
        </div><br>

        <div class="navbar-link"><br><br>
            <ul class="navmenu">
                <li class="search-div">
                    <a href="">
                        <input type="text" placeholder=" search anything">
                        <span class="fas fa-search"></span>
                    </a>
                </li><br>
                <li><a href="index.php">Home</a></li><br>
                <li><a href="about.php">About</a></li><br>
                <li><a href="store.php">Store</a></li><br>
                <li><a href="contact.php">Contact</a></li><br>
            </ul>
        </div>

    </nav>

    <!-- link to js doc -->
    <script src="js/header.js"></script>

</body>
</html>