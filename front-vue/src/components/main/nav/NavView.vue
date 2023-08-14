<script setup>
import HomeLogo from "@/assets/icons/home-logo.svg"
import Sun from "@/assets/icons/sun.svg"
import Moon from "@/assets/icons/moon.svg"

import { useIsDarkStore } from '@/pinia/pinia'
const isDarkStore = useIsDarkStore()

</script>

<template>
    <div class="flex justify-between items-center pl-8 pr-3 py-1 dark:bg-black duration-500 border">
        <div class="flex">
            <!-- home logo -->
            <div class="flex hover:opacity-70 duration-200">
                <a href="/" class="flex">
                    <img class="w-10 h-10" :src="HomeLogo" />
                    <span class="text-base font-medium self-center dark:text-white">Vue.js</span>
                </a>
            </div>
            <!-- home logo -->  

            <!-- search bar -->
            <div class="flex">
                <button type="button" class="flex group">
                    <span class="flex self-center">
                        <svg class="mx-1 w-6 h-6 fill-[#3c3c3ca8] group-hover:fill-[#213547] dark:fill-[#ebebeb99] group-hover:dark:fill-[#ebebebd9]" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"/></svg>
                        <span class="mx-0.5 text-[#3c3c3ca8]  group-hover:text-[#213547] dark:text-[#ebebeb99] group-hover:dark:text-[#ebebebd9]">Search</span>
                    </span>
                    <span class="mx-1 flex w-auto border border-[#ebebeb99] dark:border-[#ebebeb99] group-hover:border-[#42b883] rounded px-1.5 gap-0.5 text-xs self-center">
                        <kbd class="text-[#3c3c3c54] dark:text-[#ebebeb99] group-hover:text-[#42b883] justify-center">⌘</kbd>
                        <kbd class="text-[#3c3c3c54] dark:text-[#ebebeb99] group-hover:text-[#42b883] justify-center">K</kbd>
                    </span>
                </button>
            </div>
            <!-- search bar -->
        </div>

    <!-- button list -->
    <div class="flex">
        <!-- menu bar -->
        <div class="flex text-sm items-center">
            <!-- docs -->
            <div>
                <button class="flex px-1.5 dark:text-[#FFFFFFDE] dark:fill-[#FFFFFFDE] dark:hover:text-[#FFFFFF99] dark:hover:fill-[#FFFFFF99] hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3] ">
                    <span>Docs</span>
                    <svg class="w-4 h-4 self-center" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/></svg>
                </button>
            </div>
            <!-- docs -->
            <!-- api -->
            <div>
                <button class="flex px-1.5 dark:text-[#FFFFFFDE] dark:hover:text-[#42b883] hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3]">
                    <span>API</span>
                </button>
            </div>
            <!-- api -->
            <!-- playground -->
            <div>
                <button class="flex px-1.5 dark:text-[#FFFFFFDE] dark:hover:text-[#42b883] hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3]">
                    <span>Playground</span>
                </button>
            </div>
            <!-- playground -->
            <!-- ecosystem -->
            <div>
                <button class="flex px-1.5 dark:text-[#FFFFFFDE] dark:fill-[#FFFFFFDE] dark:hover:text-[#FFFFFF99] dark:hover:fill-[#FFFFFF99] hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3]">
                    <span>Ecosystem</span>
                    <svg class="w-4 h-4 self-center" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/></svg>
                </button>
            </div>
            <!-- ecosystem -->
            <!-- about -->
            <div>
                <button class="flex px-1.5 dark:text-[#FFFFFFDE] dark:fill-[#FFFFFFDE] dark:hover:text-[#FFFFFF99] dark:hover:fill-[#FFFFFF99] hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3]">
                    <span>About</span>
                    <svg class="w-4 h-4 self-center" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/></svg>
                </button>
            </div>
            <!-- about -->
            <!-- sponsor -->
            <div>
                <button class="flex px-1.5 dark:text-[#FFFFFFDE] dark:hover:text-[#42b883] hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3]">
                    <span>Sponsor</span>
                </button>
            </div>
            <!-- sponsor -->
            <!-- partners -->
            <div>
                <button class="flex px-1.5 dark:text-[#FFFFFFDE] dark:hover:text-[#42b883] hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3]">
                    <span>Partners</span>
                </button>
            </div>
            <!-- partners -->
        </div>
        <!-- menu bar -->
        <!-- language -->
        <div class="flex items-center">
            <button class="flex px-1.5 h-4 hover:text-[#3c3c3cb3] hover:fill-[#3c3c3cb3]">
                <span class="w-px bg-[#5454547a] h-full mr-1"></span>
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 w-4 h-4 self-center dark:fill-[#FFFFFFDE]" alt="language"  aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path></svg>
                <span class="w-px bg-[#5454547a] h-full ml-1"></span>
            </button>
        </div>
        <!-- language -->
        <!-- darkmode, github, twitter, discord -->
        <div class="flex items-center">
            <!-- 'lg' reactive min-width: 1024px -->
            <div class="lg:flex xl:hidden group">
                <!-- more -->
                <div class="grid-rows-2 mx-1">
                    <button type="button" class="flex items-center">
                        <svg class="w-6 h-6 mx-1.5 p-0.5 fill-[#213547] dark:fill-[#ffffffde]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>
                    </button>
                </div>
                <div class="hidden group-hover:grid grid-rows-2 top-8 right-0 w-48 h-28 rounded-lg absolute mr-3 z-10 bg-white dark:bg-black dark:text-[#FFFFFFDE]">
                    <div class="border rounded-t-lg border-b-0 flex items-center justify-evenly text-xs font-medium">
                        <span>Appearance</span>
                        <button type="button" class="ml-1 w-12 h-6 flex border rounded-[12px] justify-between bg-[#f1f1f1] dark:bg-[#2f2f2f] dark:border-[#ebebeb99] dark:hover:border-[#ebebebd9]" @click="isDarkStore.toggle()">
                            <span class="w-5 h-5 self-center rounded-full border-0 p-1 inline-block bg-white dark:invisible">
                                <img class="w-full h-full self-center" :src="Sun" alt="darkmode-off"/>
                            </span>
                            <span class="w-5 h-5 self-center rounded-full border-0 p-1 invisible bg-black dark:visible" >
                                <img class="w-full h-full self-center" :src="Moon" alt="darkmode-on" />
                            </span>
                        </button>
                    </div>
                    <div class="border rounded-b-lg flex items-center">
                         <!-- github -->
                        <div class="mx-1">
                            <a href="/" class="bg-transparent">
                                <svg class="w-6 h-6 mx-1.5 p-0.5 self-center fill-[#3c3c3ca8] hover:fill-[#213547] dark:fill-[#ebebeb99] dark:hover:fill-[#ebebebd9]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" ><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                            </a>
                        </div>
                        <!-- github -->
                        <!-- twitter -->
                        <div class="">
                            <a href="/">
                                <svg class="w-6 h-6 mx-1.5 p-0.5 self-center fill-[#3c3c3ca8] hover:fill-[#213547] dark:fill-[#ebebeb99] dark:hover:fill-[#ebebebd9]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                            </a>
                        </div>
                        <!-- twitter -->
                        <!-- discord -->
                        <div class="">
                            <a href="/">
                                <svg class="w-6 h-6 mx-1.5 p-0.5 self-center fill-[#3c3c3ca8] hover:fill-[#213547] dark:fill-[#ebebeb99] dark:hover:fill-[#ebebebd9]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg>
                            </a>
                        </div>
                        <!-- discord -->
                    </div>
                </div>
            </div>

            <!-- 'xl' reactive min-width: 1280px -->
            <div class="lg:hidden xl:flex items-center">
                <!-- darkmode -->
                <div class="mx-1">
                    <button type="button" class="ml-1 w-12 h-6 flex border rounded-[12px] justify-between bg-[#f1f1f1] dark:bg-[#2f2f2f] dark:border-[#ebebeb99] dark:hover:border-[#ebebebd9]" @click="isDarkStore.toggle()">
                        <span class="w-5 h-5 self-center rounded-full border-0 p-1 inline-block bg-white dark:invisible">
                            <img class="w-full h-full self-center" :src="Sun" alt="darkmode-off"/>
                        </span>
                        <span class="w-5 h-5 self-center rounded-full border-0 p-1 invisible bg-black dark:visible" >
                            <img class="w-full h-full self-center" :src="Moon" alt="darkmode-on" />
                        </span>
                    </button>
                </div>
                <!-- darkmode -->
                <!-- github -->
                <div class="mx-1">
                    <a href="/" class="bg-transparent">
                        <svg class="w-6 h-6 mx-1.5 p-0.5 self-center fill-[#3c3c3ca8] hover:fill-[#213547] dark:fill-[#ebebeb99] dark:hover:fill-[#ebebebd9]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" ><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    </a>
                </div>
                <!-- github -->
                <!-- twitter -->
                <div class="">
                    <a href="/">
                        <svg class="w-6 h-6 mx-1.5 p-0.5 self-center fill-[#3c3c3ca8] hover:fill-[#213547] dark:fill-[#ebebeb99] dark:hover:fill-[#ebebebd9]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                    </a>
                </div>
                <!-- twitter -->
                <!-- discord -->
                <div class="">
                    <a href="/">
                        <svg class="w-6 h-6 mx-1.5 p-0.5 self-center fill-[#3c3c3ca8] hover:fill-[#213547] dark:fill-[#ebebeb99] dark:hover:fill-[#ebebebd9]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg>
                    </a>
                </div>
                <!-- discord -->
            </div>
        </div>
        <!-- darkmode, github, twitter, discord -->
    </div>


    <!-- button list -->
    </div>

</template>
