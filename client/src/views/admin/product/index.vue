<template>
  <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2 mx-auto">
    <div class="leading-loose">
      <form class="p-10 bg-white rounded shadow-xl">
        <p class="text-lg text-gray-800 pb-4 uppercase text-center font-bold">
          Product
        </p>
        <div class>
          <label class="block text-sm text-gray-600" for="cus_name">Name</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            placeholder="Your Name"
            aria-label="Name"
            v-model="model.name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600">Details</label>
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            type="number"
            placeholder="Price"
            aria-label="Price"
            v-model="model.price"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            type="number"
            placeholder="Number"
            aria-label="Number"
            v-model="model.number"
          />
        </div>
        <div class>
          <label class="block text-sm text-gray-600" for="cus_name"
            >Category</label
          >
          <div class="py-4">
            <div class="dropdown inline-block relative">
              <div
                class="text-sm cursor-pointer bg-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center"
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
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                    @click="selectCategory('one')"
                    >One</a
                  >
                </li>
                <li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                    @click="selectCategory('two')"
                    >Two</a
                  >
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                    @click="selectCategory('tree')"
                    >Three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-6 text-center">
          <button
            class="px-4 py-1 mx-auto text-white font-light tracking-wider bg-gray-900 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./index.js"></script>