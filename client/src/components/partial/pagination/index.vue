<template>
  <div
    class="pagination px-5 py-5 border-t flex items-center flex-col justify-center"
  >
    <span class="text-xs xs:text-sm text-gray-900 mb-3"
      >Showing 1 to 4 of 50 Entries
    </span>
    <ul>
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
        >
          First
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4"
        >
          Previous
        </button>
      </li>

      <li v-for="(page, index) in pages" class="pagination-item" :key="index">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4"
        >
          Next
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<style>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
<script src="./index.js"></script>