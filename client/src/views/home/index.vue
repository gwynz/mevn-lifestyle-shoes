<template>
  <div>
    <header class="bg-gradient-green text-center text-white text-2xl bold">LIFESTYLE SHOES</header>
    <nav class="flex justify-center p-4 bg-black-400">
      <div
        class="px-4 py-2 mx-2 rounded-sm bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
      >Nam</div>
      <div
        class="px-4 py-2 mx-2 rounded-sm bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
      >Nu</div>
      <div
        class="px-4 py-2 mx-2 rounded-sm bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
      >The thao</div>
      <div
        class="px-4 py-2 mx-2 rounded-sm bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
      >Cac nhan hieu</div>
      <div
        class="px-4 py-2 mx-2 rounded-sm bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
      >Phu kien</div>
    </nav>
    <section class="mt-10 flex">
      <aside class="px-10 w-2/12"></aside>
      <section class="w-10/12">
        <content class="px-24 mx-auto grid grid-cols-5 gap-10">
          <article class="w-full card-item cursor-pointer" v-for="i in [1,2,3,4,5]" :key="i">
            <img
              class="w-full"
              src="https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202799F127006_1.jpg"
              alt="Sunset in the mountains"
            />
            <div class="p-2 pt-4">
              <div class="font-bold text-xl cursor-pointer">The Coldest Sunset</div>
            </div>
            <div class="p-2 text-red-700 text-xl">120$</div>
            <div class="p-2 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#photography</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#travel</span>
            </div>
          </article>
          <div class="w-full card-item cursor-pointer" v-for="i in [6,7,8,9,10]" :key="i">
            <img
              class="w-full"
              src="https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202799F127006_1.jpg"
              alt="Sunset in the mountains"
            />
            <div class="p-2 pt-4">
              <div class="font-bold text-xl cursor-pointer">The Coldest Sunset</div>
            </div>
            <div class="p-2 text-red-700 text-xl">120$</div>
            <div class="p-2 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#photography</span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#travel</span>
            </div>
          </div>
        </content>
      </section>
    </section>

    <footer class="mt-16 bg-black-900 h-64">
      <div class="container mx-auto flex justify-between align-middle h-full text-black-100">
        <nav class="flex items-center">
          <h4 class="bold mx-2">Gwynz</h4>
          <a class="mx-2" href="#">About</a>
          <a class="mx-2" href="#">Blog</a>
          <a class="mx-2" href="#">Podcast</a>
          <a class="mx-2" href="#">Advertising</a>
          <a class="mx-2" href="#">Docs</a>
          <a class="mx-2" href="#">Support</a>
          <a class="mx-2" href="#">Shop</a>
        </nav>
        <div class="flex items-center">
          <p>©2020 Gwz</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script src="./index.js"></script>
