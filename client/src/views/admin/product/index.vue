<template>
  <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2 mx-auto">
    <div class="leading-loose">
      <form class="p-10 rounded shadow-xl">
        <p class="text-lg text-gray-800 pb-4 uppercase text-center font-bold">
          Product
        </p>
        <div class>
          <label class="block text-sm text-gray-600" for="cus_name">Name</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-400 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            placeholder="Name"
            aria-label="Name"
            v-model="model.name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600">Details</label>
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="block text-sm text-gray-600">Price</label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-400 rounded"
            type="number"
            placeholder="Price"
            aria-label="Price"
            v-model="model.price"
          />
        </div>
        <div class="inline-block mt-1 -mx-1 pl-1 w-1/2">
          <label class="block text-sm text-gray-600">Number</label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-400 rounded"
            type="number"
            placeholder="Number"
            aria-label="Number"
            v-model="model.number"
          />
        </div>
        <div class>
          <label class="block mt-2 text-sm text-gray-600" for="cus_name"
            >Category</label
          >
          <div class="py-2">
            <div class="dropdown inline-block relative">
              <div
                class="text-sm cursor-pointer bg-gray-400 text-gray-700 py-2 px-4 rounded inline-flex items-center"
                @click="showCategory = !showCategory"
              >
                <span class="mr-1">{{
                  model.category ? model.category : "Category"
                }}</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
              <ul
                class="dropdown-menu absolute text-gray-700 pt-1 text-sm"
                v-show="showCategory"
              >
                <li class="">
                  <a
                    class="rounded-t bg-gray-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                    @click="selectCategory('one')"
                    >One</a
                  >
                </li>
                <li class="">
                  <a
                    class="bg-gray-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                    @click="selectCategory('two')"
                    >Two</a
                  >
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                    @click="selectCategory('tree')"
                    >Three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="images.length" class="flex gap-4">
          <div v-for="(item, index) in images" :key="index" class="w-1/3">
            <div class="truncate w-full">
              {{ item.file.name }}
            </div>
            <img :src="item.url" alt="" />
          </div>
        </div>
        <div>
          <label
            class="mt-2 w-48 flex flex-col items-center px-4 py-6 bg-black-700 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-500"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base leading-normal">Chọn Image</span>
            <input
              type="file"
              class="hidden"
              id="file"
              ref="fileImages"
              v-on:change="handleFileUpload"
              accept="image/*"
              multiple
            />
          </label>
        </div>
        <div class="text-red-500" v-show="errors.length">
          <div v-for="(item, index) in errors" :key="index">
            {{ item }}
          </div>
        </div>
        <div class="mt-6 text-center">
          <button
            class="px-4 py-1 mx-auto text-black-100 font-light tracking-wider bg-gray-600 rounded"
            type="submit"
            @click.prevent="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./index.js"></script>