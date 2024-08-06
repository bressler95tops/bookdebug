
document.addEventListener("DOMContentLoaded", function() {
    function get_missing_images() {
        let page_images = document.getElementsByTagName("img");

        if(page_images != null) {
            for(let i = 0; i < page_images.length; i++) {
                let current_image = page_images[i];
                let current_src = current_image.src;
                if(current_src.includes('Open-Science-101/')) {
                    let split_image = current_src.split('Open-Science-101/');

                    if(split_image != null) {
                        if(split_image.length == 2) {
                            console.log("Current Image: " + split_image[1]);
                        }
                    }
                }
                // https://bressler95tops.github.io/bookdebug/Open-Science-101/Module_1/images/media/image243.jpg
                
            }
        }
    }

    get_missing_images();

    function optimize_images() {
        let page_images = document.getElementsByTagName("img");
        console.log("Page Images:");
        
        if(page_images != null) {
            let image_arr = Array.prototype.slice.call(page_images);
        
            for (let image of image_arr) {
                let image_width = image.width;
                let image_height = image.height;
                let image_src = image.src;

                if (image_src.includes('Tops_Badge_Nasa.png') == true) {
                    console.log("Excluding logo: " + image_src);
                } else {
                    if(image_width > image_height) {
                        let width_delta = image_width - image_height;
                        let width_scale = image_width / image_height;

                        console.log("src: " + image_src + ", width: " + image_width + ", height: " + image_height + ", scale:" + width_scale);
        
                        if(image_width >= 600) {
                            if (width_scale >= 1.35) {
                                image.classList.add("tops-image-large");
                            } else {
                                image.classList.add("tops-image-medium");
                            }
                        } else {
                            if (width_scale >= 1.35) {
                                image.classList.add("tops-image-medium");
                            } else {
                                image.classList.add("tops-image-small");
                            }
                        }
                        
                    } else if(image_width == image_height || image_width < image_height) {
                        if(image_width >= 400) {
                            image.classList.add("tops-image-medium");
                        } else {
                            image.classList.add("tops-image-small");
                        }
                    }
                }
                
            }
        }
    
        // if(page_images != null && page_images.length > 0) {
        //     for(let i = 0; i < page_images.length; i++) {
        //         let current_image = page_images[i];
    
        //         console.log("src: " + current_image.src + ", width: " + current_image.width + ", height: " + current_image.height);
        //     }
        // }


    }
    
    setTimeout(function(){
        optimize_images();
    }, 500);
});