<?php
$images = ["IMG_9122-min.jpg","IMG_8926-min.jpg","IMG_8418-min.jpg","IMG_8406-min.jpg","IMG_9069-min.jpg","IMG_9184-min.jpg","IMG_9205-min.jpg", "IMG_8427-min.jpg","IMG_8454-min.jpg","IMG_8471-min.jpg","IMG_8488-min.jpg","IMG_8508-min.jpg","IMG_8559-min.jpg","IMG_8576-min.jpg","IMG_8604-min.jpg","IMG_9014-min.jpg","IMG_9033-min.jpg","IMG_8620-min.jpg","IMG_8650-min.jpg","IMG_8700-min.jpg","IMG_8715-min.jpg","IMG_8746-min.jpg","IMG_8765-min.jpg","IMG_8780-min.jpg","IMG_8790-min.jpg","IMG_8809-min.jpg","IMG_8815-min.jpg","IMG_8859-min.jpg","IMG_8899-min.jpg","IMG_8423-min.jpg","IMG_8922-min.jpg","IMG_8964-min.jpg","IMG_8991-min.jpg","IMG_9083-min.jpg","IMG_9089-min.jpg","IMG_9101-min.jpg","IMG_9139-min.jpg","IMG_9169-min.jpg","IMG_8581-min.jpg","IMG_8695-min.jpg"];
if($_SERVER['REQUEST_METHOD'] === 'GET'){
$json = json_encode($images);

header('Content-Type: application/json');


echo $json;
};



?>