<template>
  <nav class="border-gray-200 bg-white dark:bg-gray-900">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-end p-4">
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900"
        >
          <NuxtLink
            to="/"
            class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/helloWorld"
            class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
          >
            Hello World
          </NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
  <slot></slot>
</template>
