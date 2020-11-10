import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
        <div class="row mb-5 justify-content-center">
            <div class="col-md-5 text-center">
                <div class="ftco-footer-widget mb-5">
                    <ul class="ftco-footer-social list-unstyled">
                        <li class="ftco-animate"><a href="https://github.com/vetty88"><span class="icon-git"></span></a></li>
                        <li class="ftco-animate"><a href="https://www.faceproject.com/cosmoyvette"><span class="icon-faceproject"></span></a></li>
                        <li class="ftco-animate"><a href="https://www.instagram.com/vetteskii/"><span class="icon-instagram"></span></a></li>

                    </ul>
                </div>
                <div class="ftco-footer-widget">
                    <h2 class="mb-3">Contact Us</h2>
                    <p class="h3 email"><a href="#">vetty88@gmail.com</a></p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">

                <p>
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    Copyright &copy;<script>
                        document.write(new Date().getFullYear());
                    </script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true" style="color: red;"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </p>
            </div>
        </div>
    </div>
</footer>
  );
}

export default Footer;
