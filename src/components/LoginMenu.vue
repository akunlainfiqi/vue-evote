<template>
    <div class="p-8 bg-white shadow-lg h-max w-max rounded-3xl">
        <h1 class="p-8 pt-0 text-xl font-semibold text-center font-Montserrat">
            Masuk ke akun Anda!
        </h1>
        <form class="space-y-6">
            <input type="text" placeholder="Email" class="block w-full px-0 mt-0 font-semibold border-0 border-b-2 border-gray-200 5 focus:ring-0 focus:border-black font-Montserrat">
            <input type="password" placeholder="Kata Sandi" class="block w-full px-0 mt-0 font-semibold border-0 border-b-2 border-gray-200 5 focus:ring-0 focus:border-black font-Montserrat">
        </form>
        <router-link
            to="/"
            class="flex flex-col-reverse items-end justify-center py-3 text-sm font-normal transition duration-150 ease-in-out text-gradient-1a focus:outline-none hover:underline"
            >Lupa kata sandi?</router-link
          >
        <router-link to="/">
        <button type="submit" class="flex items-center justify-center w-full px-4 py-2 text-lg font-medium text-white transition duration-300 ease-in-out rounded-md bg-gradient-1a hover:bg-orange-400">
            Masuk
        </button>
        </router-link>
    </div>
</template>