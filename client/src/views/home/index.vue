<template>
  <div>
    <header class="fixed inset-0 bottom-auto z-10">
      <header class="bg-gradient-green text-center text-white text-2xl bold">LIFESTYLE SHOES</header>
      <nav class="flex justify-center p-4 bg-black-400 relative">
        <div
          class="px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
        >Nam</div>
        <div
          class="px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
        >Nu</div>
        <div
          class="px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
        >The thao</div>
        <div
          class="px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
        >Cac nhan hieu</div>
        <div
          class="px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
        >Phu kien</div>
        <div class="mr-20 absolute flex right-0">
          <div class="mr-4 flex justify-center items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 511.999 511.999"
              style="enable-background:new 0 0 511.999 511.999;"
              xml:space="preserve"
              fill="#FFFFFF"
            >
              <g>
                <g>
                  <path
                    d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"
                  />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </div>
          <div
            class="px-4 py-2 mr-4 rounded-md bg-green-500 cursor-pointer hover:opacity-75"
            @click="$refs.modalRegister.setShowModal(true)"
          >Sign Up</div>
          <div
            class="px-4 py-2 border-black-100 border-solid border-2 rounded-md bg-black-500 cursor-pointer hover:bg-black-900"
            @click="$refs.modalLogin.setShowModal(true)"
          >Sign In</div>
        </div>
      </nav>
      <logInModal ref="modalLogin" />
      <registerModal ref="modalRegister" />
    </header>
    <section class="flex pt-20">
      <sideBar class="px-10 py-16 fixed w-2/12" />
      <section class="pl-56 py-16">
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

    <footer class="bg-black-900 h-64">
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
