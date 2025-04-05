<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 py-2">
          <div class="nav justify-content-center justify-content-md-start">
            <a
              href="https://www.facebook.com/profile.php?id=100069844938443"
              target="_blank"
              ><i class="bx bxl-facebook"></i
            ></a>
            <a href="https://www.tiktok.com/@ralphmaron" target="_blank"
              ><i class="bx bxl-tiktok"></i
            ></a>
            <a href="https://www.instagram.com/ralphmaron/" target="_blank"
              ><i class="bx bxl-instagram"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/ralph-maron-eda-95a014250/"
              target="_blank"
              ><i class="bx bxl-linkedin"></i
            ></a>
            <a href="https://pin.it/6XxXlB5Td" target="_blank"
              ><i class="bx bxl-pinterest"></i
            ></a>
          </div>
        </div>
        <div class="col-md-6 py-2 text-center text-md-end">
          <p class="m-0">
            {{ currentYear }} Copyright all rights reserved | Developed by
            <a href="https://github.com/ralphmarondev" target="_blank"
              >Ralph Maron Eda</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
