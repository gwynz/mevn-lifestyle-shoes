<template>
  <transition name="right-to">
    <div
      v-if="isShow"
      class="fixed inset-0 z-20 bg-opacity-600"
      @click="isShow = false"
    >
      <div
        @click.stop
        class="absolute inset-0 left-auto w-3/12 bg-white-700 z-40 opacity-100"
      >
        <div class="px-16 py-24">
          <div class="flex items-center justify-between">
            <h3 class="text-xl uppercase font-bold">Register</h3>
            <button @click="isShow = false" class="focus:outline-none">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <hr class="my-3" />
          <form class="w-full max-w-sm mt-10">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Full Name</label
                >
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="inline-full-name"
                  type="text"
                  value="Jane Doe"
                  v-model="userModel.name"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                  >Email</label
                >
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="inline-full-name"
                  type="text"
                  v-model="userModel.email"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                  >Password</label
                >
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="inline-password"
                  type="password"
                  placeholder="******************"
                  v-model="userModel.password"
                />
              </div>
            </div>
            <div class="md:flex flex-row-reverse md:items-center mb-6">
              <label class="block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">Automatic Login</span>
              </label>
            </div>
            <div class="md:flex flex-row-reverse md:items-center">
              <button
                class="shadow bg-gradient-green hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                @click="register"
              >
                Sign Up
              </button>
            </div>
            <div class="m-4 mx-auto md:flex md:items-center mb-6 text-red-600">
              {{ error }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>
<script src="./index.js"></script>