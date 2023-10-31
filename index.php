<?php
require_once("blocks/NavBar.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php // Meta ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Generic Kanban</title>

    <?php // Styles ?>
    <link rel="shortcut icon" href="" type="image/x-icon" /> <?php // Site Logo ?>
    <link rel="stylesheet" href="./styles/index.css" /> <?php // Main Cross-Page style ?>
    <link rel="stylesheet" href="./styles/kanban.css" />
    <?php // Scripts ?>
    <script src="https://kit.fontawesome.com/2a10a7ed51.js" crossorigin="anonymous"></script> <?php // Font Awesome ?>
</head>

<body>
    <div class="modal-container">
        <div class="modal" id="card-information">
            <div class="modal-header">
                <h1>Card Details</h1>
                <button class="button"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="modal-body">
                <p id="card-text-information">
                    Lorem Ipsum
                </p>
            </div>
        </div>
    </div>

    <div class="content">
        <nav>
            <div class="logo-container">
                <img src="logo.png" alt="Kanban Logo" />
            </div>
            <div class="nav-container">
                <?php
                    $nav = new NavBar(["Home"=>"#", "About"=>"About.php", "Projects"=>"Projects.php", "Logout"=>"#"]);
                ?>
            </div>
        </nav>

        <header>
            <div class="project-details-container">
                <h1>Project Title</h1>
                <button class="button"><i class="fa-regular fa-pen-to-square"></i></button>
            </div>
            <div class="cta-container">
                <div class="tools">
                    
                </div>
                <div class="saving">
                    <button class="button cta"><i class="fa-solid fa-door-open"></i>&nbsp;Back</button>
                    <button class="button cta"><i class="fa-solid fa-floppy-disk"></i>&nbsp;Save / Publish</button>
                </div>
            </div>
        </header>

        <section class="card-container">
            <div class="card" data-roki-card-title="Title 2" draggable="true">
                <div class="card-header">
                    <div class="card-details">
                        <h2 class="card-title">Title Here</h2>
                    </div>
                    <div class="card-cta">
                        <button class="button"><i class="fa-solid fa-gear"></i></button>
                        <button class="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-item" data-roki-pop="#someModal" draggable="true">
                        <div class="card-item-cta">
                            <button class="button"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div class="card-item" data-roki-pop="#someModal" draggable="true">
                        <div class="card-item-cta">
                            <button class="button"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    item test
                    </div>

                    <button class="button cta">Add Item</button>
                </div>
            </div>
            <button class="button" id="btn_addCard"><i class="fa-solid fa-circle-plus"></i></button>
        </section>

        <footer>
            Copyright
        </footer>
    </div>

    <script type="module" src="scripts/index.js"></script>
</body>

</html>