<template>
  <div class="py-1.5">
    <div class="loader p">
    </div>
  </div>
</template>


<style  scoped>
.loader {
  width: 12px;
  height: 12px;
  aspect-ratio: 1;
  background: white;
  border-radius: 50%;
  animation: l6 0.6s infinite linear alternate;
}

@keyframes l6 {
  0% {
    box-shadow: 15px 0, -25px 0
  }

  50% {
    box-shadow: 15px 0, -15px 0
  }

  100% {
    box-shadow: 25px 0, -15px 0
  }
}
</style>