<template>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'arow-down-white'">
        <path d="M16.6001 7.45898L11.1668 12.8923C10.5251 13.534 9.47515 13.534 8.83348 12.8923L3.40015 7.45898"
            stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- replay -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'replay'">
        <path
            d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- move -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name == 'move'">
        <path d="M17.2803 10.4498L21.0002 6.72974L17.2803 3.00977" stroke="#333333" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 6.72949H21" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.71997 13.5498L3 17.2698L6.71997 20.9898" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M21 17.2695H3" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


    <!-- packages -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'packages'">
        <path
            d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.5 17.5H20.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" />
        <path d="M17.5 20.5V14.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" />
    </svg>


    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'packages-blue'">
        <path
            d="M17.75 16.75V17.25H18.25H20.5C20.6339 17.25 20.75 17.3661 20.75 17.5C20.75 17.6339 20.6339 17.75 20.5 17.75H18.25H17.75V18.25V20.5C17.75 20.6339 17.6339 20.75 17.5 20.75C17.3661 20.75 17.25 20.6339 17.25 20.5V18.25V17.75H16.75H14.5C14.3661 17.75 14.25 17.6339 14.25 17.5C14.25 17.3661 14.3661 17.25 14.5 17.25H16.75H17.25V16.75V14.5C17.25 14.3661 17.3661 14.25 17.5 14.25C17.6339 14.25 17.75 14.3661 17.75 14.5V16.75Z"
            fill="#0E57CC" stroke="#0E57CC" />
        <path
            d="M19.7731 9.99001V9.99H19.77H15.73C14.9723 9.99 14.5694 9.85211 14.3501 9.65808C14.1466 9.47796 14 9.15669 14 8.51V3.98C14 3.33935 14.1461 3.01693 14.3509 2.83503C14.5707 2.63973 14.974 2.5 15.73 2.5H19.77C20.526 2.5 20.9293 2.63973 21.1491 2.83503C21.3539 3.01693 21.5 3.33935 21.5 3.98V8.52C21.5 9.16102 21.3537 9.48268 21.1499 9.66308C20.9312 9.85664 20.5288 9.99476 19.7731 9.99001Z"
            fill="#0E57CC" stroke="#0E57CC" />
        <path
            d="M8.27315 9.99001V9.99H8.27H4.23C3.47225 9.99 3.06936 9.85211 2.85012 9.65808C2.64661 9.47796 2.5 9.15669 2.5 8.51V3.98C2.5 3.33935 2.64613 3.01693 2.85085 2.83503C3.07065 2.63973 3.47403 2.5 4.23 2.5H8.27C9.02597 2.5 9.42935 2.63973 9.64915 2.83503C9.85387 3.01693 10 3.33935 10 3.98V8.52C10 9.16102 9.85371 9.48268 9.64988 9.66308C9.43116 9.85664 9.02884 9.99476 8.27315 9.99001Z"
            fill="#0E57CC" stroke="#0E57CC" />
        <path
            d="M10 15.73V19.77C10 20.5149 9.84713 20.9083 9.6277 21.1277C9.40827 21.3471 9.01492 21.5 8.27 21.5H4.23C3.48508 21.5 3.09173 21.3471 2.8723 21.1277C2.65287 20.9083 2.5 20.5149 2.5 19.77V15.73C2.5 14.9851 2.65287 14.5917 2.8723 14.3723C3.09173 14.1529 3.48508 14 4.23 14H8.27C9.01492 14 9.40827 14.1529 9.6277 14.3723C9.84713 14.5917 10 14.9851 10 15.73Z"
            fill="#0E57CC" stroke="#0E57CC" />
    </svg>


    <!-- details -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'details'">
        <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#292D32" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7 13H13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 17H11" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- list -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'list'">
        <path
            d="M20 19.26H10.93C10.48 19.26 10.11 18.89 10.11 18.44C10.11 17.99 10.48 17.62 10.93 17.62H20C20.45 17.62 20.82 17.99 20.82 18.44C20.82 18.9 20.45 19.26 20 19.26Z"
            fill="#292D32" />
        <path
            d="M20 12.97H10.93C10.48 12.97 10.11 12.6 10.11 12.15C10.11 11.7 10.48 11.33 10.93 11.33H20C20.45 11.33 20.82 11.7 20.82 12.15C20.82 12.6 20.45 12.97 20 12.97Z"
            fill="#292D32" />
        <path
            d="M20 6.67003H10.93C10.48 6.67003 10.11 6.30003 10.11 5.85003C10.11 5.40003 10.48 5.03003 10.93 5.03003H20C20.45 5.03003 20.82 5.40003 20.82 5.85003C20.82 6.30003 20.45 6.67003 20 6.67003Z"
            fill="#292D32" />
        <path
            d="M4.91005 8.03004C4.69005 8.03004 4.48005 7.94004 4.33005 7.79004L3.42005 6.88004C3.10005 6.56004 3.10005 6.04004 3.42005 5.72004C3.74005 5.40004 4.26005 5.40004 4.58005 5.72004L4.91005 6.05004L7.05005 3.91004C7.37005 3.59004 7.89005 3.59004 8.21005 3.91004C8.53005 4.23004 8.53005 4.75004 8.21005 5.07004L5.49005 7.79004C5.33005 7.94004 5.13005 8.03004 4.91005 8.03004Z"
            fill="#292D32" />
        <path
            d="M4.91005 14.33C4.70005 14.33 4.49005 14.25 4.33005 14.09L3.42005 13.18C3.10005 12.86 3.10005 12.34 3.42005 12.02C3.74005 11.7 4.26005 11.7 4.58005 12.02L4.91005 12.35L7.05005 10.21C7.37005 9.88997 7.89005 9.88997 8.21005 10.21C8.53005 10.53 8.53005 11.05 8.21005 11.37L5.49005 14.09C5.33005 14.25 5.12005 14.33 4.91005 14.33Z"
            fill="#292D32" />
        <path
            d="M4.91005 20.33C4.70005 20.33 4.49005 20.25 4.33005 20.09L3.42005 19.18C3.10005 18.86 3.10005 18.34 3.42005 18.02C3.74005 17.7 4.26005 17.7 4.58005 18.02L4.91005 18.35L7.05005 16.21C7.37005 15.89 7.89005 15.89 8.21005 16.21C8.53005 16.53 8.53005 17.05 8.21005 17.37L5.49005 20.09C5.33005 20.25 5.12005 20.33 4.91005 20.33Z"
            fill="#292D32" />
    </svg>


    <!-- drivers -->
    <svg v-if="name === 'drivers'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.32 2H4.68C3.21 2 2 3.21 2 4.68V7.31C2 8.79 3.21 10 4.68 10H19.31C20.79 10 22 8.79 22 7.32V4.68C22 3.21 20.79 2 19.32 2ZM6.75 7C6.75 7.41 6.41 7.75 6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7ZM10.75 7C10.75 7.41 10.41 7.75 10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7ZM18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z"
            stroke="#333333" />
        <path
            d="M19.32 14H4.68C3.21 14 2 15.21 2 16.68V19.31C2 20.79 3.21 22 4.68 22H19.31C20.79 22 21.99 20.79 21.99 19.32V16.69C22 15.21 20.79 14 19.32 14ZM6.75 19C6.75 19.41 6.41 19.75 6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19ZM10.75 19C10.75 19.41 10.41 19.75 10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19ZM18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
            stroke="#333333" />
    </svg>

    <!-- arrow downs -->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
        v-if="name === 'arrow-down'">
        <path d="M16.6004 7.4585L11.1671 12.8918C10.5254 13.5335 9.47539 13.5335 8.83372 12.8918L3.40039 7.4585"
            stroke="#333333" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'arrow-down-blue'">
        <path d="M15.0999 1.45898L9.66657 6.89232C9.0249 7.53399 7.9749 7.53399 7.33324 6.89232L1.8999 1.45898"
            stroke="#116DFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- arrow up -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'arrow-up-fill'">
        <path
            d="M6.08025 15.8203L12.3103 15.8203L17.9203 15.8203C18.8803 15.8203 19.3603 14.6603 18.6803 13.9803L13.5003 8.80031C12.6703 7.97031 11.3203 7.97031 10.4903 8.80031L8.52025 10.7703L5.31025 13.9803C4.64025 14.6603 5.12025 15.8203 6.08025 15.8203Z"
            fill="#0E57CC" />
    </svg>

    <!-- arrow rights -->

    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"
        v-if="name === 'arrow-right'">
        <path d="M1.4585 14.6004L6.89183 9.16706C7.5335 8.52539 7.5335 7.47539 6.89183 6.83372L1.4585 1.40039"
            stroke="#333333" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- arrow lefts(bg) -->

    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'arrow-left-bg'">
        <rect width="36" height="36" rx="8" fill="#F2F2F2" />
        <path d="M20.5415 24.6004L15.1082 19.1671C14.4665 18.5254 14.4665 17.4754 15.1082 16.8337L20.5415 11.4004"
            stroke="#333333" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'arrow-left-transparent'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.4999 12H3.66992" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- calendars -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'calendar'">
        <path d="M8 2V5" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M16 2V5" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M3.5 9.08984H20.5" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.6947 13.7002H15.7037" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M15.6947 16.7002H15.7037" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M11.9955 13.7002H12.0045" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M11.9955 16.7002H12.0045" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M8.29431 13.7002H8.30329" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M8.29431 16.7002H8.30329" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'calendar-blue'">
        <path d="M8 2V5" stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M16 2V5" stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M3.5 9.09009H20.5" stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.6947 13.7H15.7037" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M15.6947 16.7H15.7037" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M11.9955 13.7H12.0045" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M11.9955 16.7H12.0045" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M8.29431 13.7H8.30329" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M8.29431 16.7H8.30329" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- categories -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'category'">
        <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#333333"
            stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#333333"
            stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#333333"
            stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- chart -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'chart'">
        <path d="M3 22H21" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M12.8002 5.18994H11.2002C10.6502 5.18994 10.2002 5.63994 10.2002 6.18994V17.9999C10.2002 18.5499 10.6502 18.9999 11.2002 18.9999H12.8002C13.3502 18.9999 13.8002 18.5499 13.8002 17.9999V6.18994C13.8002 5.63994 13.3502 5.18994 12.8002 5.18994Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M19.9999 2H18.3999C17.8499 2 17.3999 2.45 17.3999 3V18C17.3999 18.55 17.8499 19 18.3999 19H19.9999C20.5499 19 20.9999 18.55 20.9999 18V3C20.9999 2.45 20.5499 2 19.9999 2Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- close -->

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'close'">
        <path
            d="M16.0001 29.3332C23.3334 29.3332 29.3334 23.3332 29.3334 15.9998C29.3334 8.6665 23.3334 2.6665 16.0001 2.6665C8.66675 2.6665 2.66675 8.6665 2.66675 15.9998C2.66675 23.3332 8.66675 29.3332 16.0001 29.3332Z"
            :stroke="color || '#B2B2B2'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.2268 19.7732L19.7735 12.2266" :stroke="color || '#B2B2B2'" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19.7735 19.7732L12.2268 12.2266" :stroke="color || '#B2B2B2'" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- trash icons -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'trash'">
        <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#333333"
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M18.8484 9.13989L18.1984 19.2099C18.0884 20.7799 17.9984 21.9999 15.2084 21.9999H8.78844C5.99844 21.9999 5.90844 20.7799 5.79844 19.2099L5.14844 9.13989"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.3281 16.5H13.6581" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M9.5 12.5H14.5" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'trash-bg'">
        <rect width="32" height="32" rx="8" fill="#F2F2F2" />
        <path
            d="M23.5 10.9831C20.725 10.7081 17.9333 10.5664 15.15 10.5664C13.5 10.5664 11.85 10.6497 10.2 10.8164L8.5 10.9831"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M13.083 10.1415L13.2663 9.04984C13.3997 8.25817 13.4997 7.6665 14.908 7.6665H17.0913C18.4997 7.6665 18.608 8.2915 18.733 9.05817L18.9163 10.1415"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M21.7087 13.6167L21.167 22.0084C21.0753 23.3167 21.0003 24.3334 18.6753 24.3334H13.3253C11.0003 24.3334 10.9253 23.3167 10.8337 22.0084L10.292 13.6167"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.6084 19.75H17.3834" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M13.917 16.4165H18.0837" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'trash-blue'">
        <path
            d="M17.5 4.98381C14.725 4.70881 11.9333 4.56714 9.15 4.56714C7.5 4.56714 5.85 4.65047 4.2 4.81714L2.5 4.98381"
            stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7.08398 4.14175L7.26732 3.05008C7.40065 2.25841 7.50065 1.66675 8.90898 1.66675H11.0923C12.5007 1.66675 12.609 2.29175 12.734 3.05841L12.9173 4.14175"
            stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M15.7077 7.61719L15.166 16.0089C15.0743 17.3172 14.9993 18.3339 12.6743 18.3339H7.32435C4.99935 18.3339 4.92435 17.3172 4.83268 16.0089L4.29102 7.61719"
            stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.60742 13.75H11.3824" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7.91602 10.4167H12.0827" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'trash-transparent'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M18.8499 9.14L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.3301 16.5H13.6601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>


    <!-- dollar -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'dollar'">
        <path
            d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 6V18" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#333333"
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- dots -->

    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="name === 'dots'">
        <ellipse cx="2" cy="1.94595" rx="2" ry="1.94595" fill="#333333" />
        <ellipse cx="2" cy="7.99991" rx="2" ry="1.94595" fill="#333333" />
        <ellipse cx="2" cy="14.0541" rx="2" ry="1.94595" fill="#333333" />
    </svg>

    <!-- edit -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'edit'">
        <path
            d="M13.2594 3.59997L5.04936 12.29C4.73936 12.62 4.43936 13.27 4.37936 13.72L4.00936 16.96C3.87936 18.13 4.71936 18.93 5.87936 18.73L9.09936 18.18C9.54936 18.1 10.1794 17.77 10.4894 17.43L18.6994 8.73997C20.1194 7.23997 20.7594 5.52997 18.5494 3.43997C16.3494 1.36997 14.6794 2.09997 13.2594 3.59997Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.8906 5.05005C12.3206 7.81005 14.5606 9.92005 17.3406 10.2" stroke="#333333" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 22H21" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
        v-if="name === 'edit-bg'">
        <rect width="32" height="32" rx="8" fill="#F2F2F2" />
        <path
            d="M17.0475 9.00002L10.2058 16.2417C9.94752 16.5167 9.69752 17.0584 9.64752 17.4334L9.33918 20.1333C9.23085 21.1083 9.93085 21.775 10.8975 21.6084L13.5808 21.15C13.9558 21.0834 14.4808 20.8084 14.7392 20.525L21.5809 13.2834C22.7642 12.0334 23.2975 10.6084 21.4558 8.86668C19.6225 7.14168 18.2308 7.75002 17.0475 9.00002Z"
            stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.9102 10.2085C16.2685 12.5085 18.1352 14.2668 20.4518 14.5002" stroke="#333333" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.5 24.3335H23.5" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- filter -->

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'filter'">
        <path
            d="M11.9328 15.8917C11.9328 16.4 11.5995 17.0667 11.1745 17.325L9.99948 18.0834C8.90781 18.7584 7.39114 18 7.39114 16.65V12.1917C7.39114 11.6 7.05781 10.8417 6.71615 10.425L3.51612 7.05837C3.09112 6.63337 2.75781 5.88338 2.75781 5.37505V3.44171C2.75781 2.43338 3.51616 1.67505 4.44116 1.67505H15.5578C16.4828 1.67505 17.2411 2.43337 17.2411 3.35837V5.20837C17.2411 5.88337 16.8161 6.72505 16.3995 7.14171"
            stroke="#116DFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M13.3932 13.7667C14.866 13.7667 16.0599 12.5728 16.0599 11.1C16.0599 9.62727 14.866 8.43335 13.3932 8.43335C11.9205 8.43335 10.7266 9.62727 10.7266 11.1C10.7266 12.5728 11.9205 13.7667 13.3932 13.7667Z"
            stroke="#116DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.5599 14.2667L15.7266 13.4333" stroke="#116DFF" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- headphone -->

    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'headphone'">
        <path
            d="M4.46005 17.4898V14.5698C4.46005 13.5998 5.22005 12.7298 6.30005 12.7298C7.27005 12.7298 8.14005 13.4898 8.14005 14.5698V17.3798C8.14005 19.3298 6.52005 20.9498 4.57005 20.9498C2.62005 20.9498 1.00005 19.3198 1.00005 17.3798V11.2198C0.890047 5.5998 5.33005 1.0498 10.95 1.0498C16.57 1.0498 21 5.5998 21 11.1098V17.2698C21 19.2198 19.38 20.8398 17.43 20.8398C15.48 20.8398 13.86 19.2198 13.86 17.2698V14.4598C13.86 13.4898 14.62 12.6198 15.7 12.6198C16.67 12.6198 17.54 13.3798 17.54 14.4598V17.4898"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- info -->

    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'info'">
        <path
            d="M8.0026 14.6668C11.6693 14.6668 14.6693 11.6668 14.6693 8.00016C14.6693 4.3335 11.6693 1.3335 8.0026 1.3335C4.33594 1.3335 1.33594 4.3335 1.33594 8.00016C1.33594 11.6668 4.33594 14.6668 8.0026 14.6668Z"
            stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 5.33325V8.66659" stroke="#999999" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M8 10.6665H8.00599" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'info-red'">
        <path
            d="M9.99984 18.8332C14.5832 18.8332 18.3332 15.0832 18.3332 10.4998C18.3332 5.9165 14.5832 2.1665 9.99984 2.1665C5.4165 2.1665 1.6665 5.9165 1.6665 10.4998C1.6665 15.0832 5.4165 18.8332 9.99984 18.8332Z"
            stroke="#CC0E0E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 7.1665V11.3332" stroke="#CC0E0E" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M9.99561 13.8335H10.0031" stroke="#CC0E0E" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- labratory -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'labratory'">
        <path
            d="M8.15979 22C3.97979 22 3.13979 19.47 4.49979 16.39L8.74979 6.74H8.44979C7.79979 6.74 7.19979 6.48 6.76979 6.05C6.32979 5.62 6.06979 5.02 6.06979 4.37C6.06979 3.07 7.12979 2 8.43979 2H15.5498C16.2098 2 16.7998 2.27 17.2298 2.7C17.7898 3.26 18.0698 4.08 17.8598 4.95C17.5898 6.03 16.5498 6.74 15.4398 6.74H15.2798L19.4998 16.4C20.8498 19.48 19.9698 22 15.8298 22H8.15979Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M5.93994 13.1199C5.93994 13.1199 8.99994 12.9999 11.9999 13.9999C14.9999 14.9999 17.8299 13.1099 17.8299 13.1099"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- exit -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'exit'">
        <path
            d="M15.1001 16.4398C14.7901 20.0398 12.9401 21.5098 8.8901 21.5098L8.7601 21.5098C4.2901 21.5098 2.5001 19.7198 2.5001 15.2498L2.5001 8.72976C2.5001 4.25976 4.2901 2.46976 8.7601 2.46976L8.8901 2.46976C12.9101 2.46976 14.7601 3.91976 15.0901 7.45976"
            stroke="#4C4C4C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.99988 12L20.3799 12" stroke="#4C4C4C" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M18.15 15.3501L21.5 12.0001L18.15 8.6501" stroke="#4C4C4C" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- magic-pen -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'magic-pen'">
        <path
            d="M3.49994 20.4999C4.32994 21.3299 5.66994 21.3299 6.49994 20.4999L19.4999 7.49994C20.3299 6.66994 20.3299 5.32994 19.4999 4.49994C18.6699 3.66994 17.3299 3.66994 16.4999 4.49994L3.49994 17.4999C2.66994 18.3299 2.66994 19.6699 3.49994 20.4999Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.0098 8.99023L15.0098 5.99023" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M8.5 2.44L10 2L9.56 3.5L10 5L8.5 4.56L7 5L7.44 3.5L7 2L8.5 2.44Z" stroke="#333333"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.5 8.44L6 8L5.56 9.5L6 11L4.5 10.56L3 11L3.44 9.5L3 8L4.5 8.44Z" stroke="#333333"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19.5 13.44L21 13L20.56 14.5L21 16L19.5 15.56L18 16L18.44 14.5L18 13L19.5 13.44Z" stroke="#333333"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- message -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'message'">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#333333" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- message-transparent -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'message-transparent'">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="currentColor" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'messages'">
        <path
            d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'message-tick'">
        <path
            d="M22 7.42969V13.4297C22 14.9297 21.5 16.1797 20.62 17.0597C19.75 17.9297 18.5 18.4297 17 18.4297V20.5597C17 21.3597 16.11 21.8397 15.45 21.3997L11 18.4297H8.88C8.96 18.1297 9 17.8197 9 17.4997C9 16.4797 8.61 15.5397 7.97 14.8297C7.25 14.0097 6.18 13.4997 5 13.4997C3.88 13.4997 2.86 13.9597 2.13 14.7097C2.04 14.3097 2 13.8797 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.99609 17.501C8.99609 18.251 8.78611 18.961 8.41611 19.561C8.20611 19.921 7.9361 20.241 7.6261 20.501C6.9261 21.131 6.00609 21.501 4.99609 21.501C3.53609 21.501 2.26608 20.721 1.57608 19.561C1.20608 18.961 0.996094 18.251 0.996094 17.501C0.996094 16.241 1.57609 15.111 2.49609 14.381C3.18609 13.831 4.05609 13.501 4.99609 13.501C7.20609 13.501 8.99609 15.291 8.99609 17.501Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.43359 17.5005L4.42358 18.4905L6.55359 16.5205" stroke="#333333" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.5 10.5H15.5" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'message-programming'">
        <path
            d="M8.5 18.9697H8C4 18.9697 2 17.9697 2 12.9697V7.96973C2 3.96973 4 1.96973 8 1.96973H16C20 1.96973 22 3.96973 22 7.96973V12.9697C22 16.9697 20 18.9697 16 18.9697H15.5C15.19 18.9697 14.89 19.1198 14.7 19.3698L13.2 21.3698C12.54 22.2498 11.46 22.2498 10.8 21.3698L9.29999 19.3698C9.13999 19.1498 8.78 18.9697 8.5 18.9697Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 8.7002L6 10.7002L8 12.7002" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 8.7002L18 10.7002L16 12.7002" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13 8.37012L11 13.0302" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!--  message add -->
    <svg v-if="name == 'message-add'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.5 12H15.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M12 15.5V8.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <!--  message-question -->
    <svg v-if="name == 'message-question'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.5 18.4301H13.5L9.04999 21.39C8.38999 21.83 7.5 21.3601 7.5 20.5601V18.4301C4.5 18.4301 2.5 16.4301 2.5 13.4301V7.42999C2.5 4.42999 4.5 2.42999 7.5 2.42999H17.5C20.5 2.42999 22.5 4.42999 22.5 7.42999V13.4301C22.5 16.4301 20.5 18.4301 17.5 18.4301Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M12.4998 11.36V11.15C12.4998 10.47 12.9198 10.11 13.3398 9.82001C13.7498 9.54001 14.1598 9.18002 14.1598 8.52002C14.1598 7.60002 13.4198 6.85999 12.4998 6.85999C11.5798 6.85999 10.8398 7.60002 10.8398 8.52002"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.4955 13.75H12.5045" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'message-3'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2L17.75 2C20.3 2 22 3.7 22 6.25Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M15.59 12.4L15.59 16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47L2 12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9L12.19 9C14.23 9 15.59 10.36 15.59 12.4Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>



    <!-- notification -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'notification'">
        <path
            d="M12.0206 2.91016C8.71058 2.91016 6.02058 5.60016 6.02058 8.91016V11.8002C6.02058 12.4102 5.76058 13.3402 5.45058 13.8602L4.30058 15.7702C3.59058 16.9502 4.08058 18.2602 5.38058 18.7002C9.69058 20.1402 14.3406 20.1402 18.6506 18.7002C19.8606 18.3002 20.3906 16.8702 19.7306 15.7702L18.5806 13.8602C18.2806 13.3402 18.0206 12.4102 18.0206 11.8002V8.91016C18.0206 5.61016 15.3206 2.91016 12.0206 2.91016Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
        <path
            d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" />
        <rect x="15" width="6" height="6" rx="3" fill="#FF1111" />
    </svg>
    <svg v-if="name == 'notification-transparent'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5201 2.91C9.21009 2.91 6.52009 5.6 6.52009 8.91V11.8C6.52009 12.41 6.26009 13.34 5.95009 13.86L4.80009 15.77C4.09009 16.95 4.58009 18.26 5.88009 18.7C10.1901 20.14 14.8401 20.14 19.1501 18.7C20.3601 18.3 20.8901 16.87 20.2301 15.77L19.0801 13.86C18.7801 13.34 18.5201 12.41 18.5201 11.8V8.91C18.5201 5.61 15.8201 2.91 12.5201 2.91Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
        <path
            d="M14.3699 3.2C14.0599 3.11 13.7399 3.04 13.4099 3C12.4499 2.88 11.5299 2.95 10.6699 3.2C10.9599 2.46 11.6799 1.94 12.5199 1.94C13.3599 1.94 14.0799 2.46 14.3699 3.2Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M15.52 19.06C15.52 20.71 14.17 22.06 12.52 22.06C11.7 22.06 10.94 21.72 10.4 21.18C9.86002 20.64 9.52002 19.88 9.52002 19.06"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
    </svg>


    <!-- posibilities -->

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="name === 'posibilities'">
        <path d="M12.3701 8.87988H17.6201" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M6.37988 8.87988L7.12988 9.62988L9.37988 7.37988" stroke="#333333" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.3701 15.8799H17.6201" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M6.37988 15.8799L7.12988 16.6299L9.37988 14.3799" stroke="#333333" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#333333"
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- printer -->

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'printer'">
        <path
            d="M6.04102 5.83341H13.9577V4.16675C13.9577 2.50008 13.3327 1.66675 11.4577 1.66675H8.54102C6.66602 1.66675 6.04102 2.50008 6.04102 4.16675V5.83341Z"
            stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M13.3327 12.5V15.8333C13.3327 17.5 12.4993 18.3333 10.8327 18.3333H9.16602C7.49935 18.3333 6.66602 17.5 6.66602 15.8333V12.5H13.3327Z"
            stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M17.5 8.33325V12.4999C17.5 14.1666 16.6667 14.9999 15 14.9999H13.3333V12.4999H6.66667V14.9999H5C3.33333 14.9999 2.5 14.1666 2.5 12.4999V8.33325C2.5 6.66659 3.33333 5.83325 5 5.83325H15C16.6667 5.83325 17.5 6.66659 17.5 8.33325Z"
            stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.1673 12.5H13.159H5.83398" stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.83398 9.16675H8.33398" stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- printer-transparent -->

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'printer-transparent'">
        <path
            d="M6.04102 5.83341H13.9577V4.16675C13.9577 2.50008 13.3327 1.66675 11.4577 1.66675H8.54102C6.66602 1.66675 6.04102 2.50008 6.04102 4.16675V5.83341Z"
            stroke="currentColor" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M13.3327 12.5V15.8333C13.3327 17.5 12.4993 18.3333 10.8327 18.3333H9.16602C7.49935 18.3333 6.66602 17.5 6.66602 15.8333V12.5H13.3327Z"
            stroke="currentColor" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M17.5 8.33325V12.4999C17.5 14.1666 16.6667 14.9999 15 14.9999H13.3333V12.4999H6.66667V14.9999H5C3.33333 14.9999 2.5 14.1666 2.5 12.4999V8.33325C2.5 6.66659 3.33333 5.83325 5 5.83325H15C16.6667 5.83325 17.5 6.66659 17.5 8.33325Z"
            stroke="currentColor" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M14.1673 12.5H13.159H5.83398" stroke="currentColor" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.83398 9.16675H8.33398" stroke="currentColor" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- puzzle -->

    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"
        v-if="name === 'puzzle'">
        <path
            d="M4.74467 20.9931C3.90085 20.9931 3.05703 20.9931 2.21322 20.9931C1.44753 20.9906 1.00625 20.5512 1.00563 19.7862C1.00563 18.4193 1.00875 17.0517 1 15.6847C1 15.4885 1.05188 15.4347 1.25002 15.4397C1.89819 15.4522 2.547 15.4516 3.19517 15.4397C4.57028 15.421 5.55223 14.3303 5.42972 12.9646C5.33596 11.9183 4.33526 11.0158 3.23392 10.997C2.5695 10.9864 1.9057 10.9883 1.24127 10.997C1.06501 10.997 1.00188 10.9627 1.00313 10.7695C1.01188 9.39445 1.00625 8.01939 1.00875 6.64432C1.00688 5.88803 1.45066 5.44239 2.21884 5.43989C3.5552 5.43614 4.89093 5.43989 6.22728 5.43989C6.60981 5.43989 6.54856 5.47614 6.55668 5.12175C6.57356 4.38046 6.49793 3.63543 6.59418 2.89789C6.66365 2.37813 6.91751 1.90061 7.30953 1.55231C7.70154 1.20401 8.20563 1.00812 8.72998 1.0003C9.80006 0.982176 10.7633 1.78159 10.9564 2.84414C11.0414 3.30979 10.9889 3.78168 11.0002 4.24671C11.0077 4.56735 11.0133 4.88799 10.997 5.208C10.9877 5.39551 11.0502 5.44051 11.2314 5.43989C12.5984 5.43239 13.966 5.43989 15.333 5.43489C15.7111 5.43489 16.0412 5.53864 16.2943 5.83366C16.5043 6.07929 16.5606 6.37118 16.56 6.68495C16.5575 8.01334 16.5575 9.34153 16.56 10.6695C16.56 11.0595 16.5243 10.9958 16.8769 10.9977C17.5175 11.002 18.1582 10.9902 18.7989 11.0027C19.8752 11.0239 20.8615 11.9052 20.9822 12.9365C21.0515 13.481 20.9169 14.0318 20.6043 14.4829C20.2916 14.9341 19.8231 15.2535 19.2889 15.3797C19.0679 15.4297 18.8416 15.4524 18.6151 15.4472C18.0057 15.4472 17.3963 15.4541 16.7869 15.4416C16.5993 15.4379 16.5543 15.501 16.5556 15.6791C16.5618 17.0467 16.5618 18.414 16.5556 19.7812C16.5556 20.3887 16.2612 20.8037 15.743 20.9556C15.6294 20.9852 15.5122 20.9983 15.3949 20.9944C14.3717 20.9944 13.3478 20.99 12.3246 21C12.1371 21 12.1071 20.9375 12.1096 20.7706C12.1177 20.1225 12.1209 19.4737 12.1096 18.8255C12.0884 17.4173 10.9877 16.4323 9.60567 16.5754C8.57809 16.6817 7.68739 17.6742 7.66802 18.7505C7.65614 19.4306 7.65989 20.11 7.66802 20.79C7.66802 20.9544 7.62051 21.0006 7.45738 20.9994C6.55731 20.9894 5.65099 20.9931 4.74467 20.9931Z"
            stroke="#333333" stroke-width="1.7" stroke-miterlimit="10" />
    </svg>

    <!-- refresh icons -->

    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'refresh'">
        <path
            d="M21 11C21 16.52 16.52 21 11 21C5.48 21 2.11 15.44 2.11 15.44M2.11 15.44H6.63M2.11 15.44V20.44M1 11C1 5.48 5.44 1 11 1C17.67 1 21 6.56 21 6.56M21 6.56V1.56M21 6.56H16.56"
            stroke="#292D32" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'refresh-blue'">
        <path
            d="M21 11C21 16.52 16.52 21 11 21C5.48 21 2.11 15.44 2.11 15.44M2.11 15.44H6.63M2.11 15.44V20.44M1 11C1 5.48 5.44 1 11 1C17.67 1 21 6.56 21 6.56M21 6.56V1.56M21 6.56H16.56"
            stroke="#116DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- search -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'search'">
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#292D32" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 22L20 20" stroke="#292D32" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'search-blue'">
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 22L20 20" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- sends -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'send'">
        <path d="M12 9V2L10 4" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 2L14 4" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7 5.12988C3.46 5.64988 2 7.72988 2 11.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V11.9999C22 7.72988 20.54 5.64988 17 5.12988"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'send-blue'">
        <path
            d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z"
            fill="#0E57CC" />
        <path
            d="M12.7502 3.80999L13.4702 4.52999C13.6202 4.67999 13.8102 4.74999 14.0002 4.74999C14.1902 4.74999 14.3802 4.67999 14.5302 4.52999C14.8202 4.23999 14.8202 3.75999 14.5302 3.46999L12.5302 1.46999C12.5202 1.45999 12.5102 1.45999 12.5102 1.44999C12.4502 1.38999 12.3702 1.33999 12.2902 1.29999C12.2802 1.29999 12.2802 1.29999 12.2702 1.28999C12.1902 1.25999 12.1102 1.24999 12.0302 1.23999C12.0002 1.23999 11.9802 1.23999 11.9502 1.23999C11.8902 1.23999 11.8302 1.25999 11.7702 1.27999C11.7402 1.28999 11.7202 1.29999 11.7002 1.30999C11.6202 1.34999 11.5402 1.38999 11.4802 1.45999L9.4802 3.45999C9.1902 3.74999 9.1902 4.22999 9.4802 4.51999C9.7702 4.80999 10.2502 4.80999 10.5402 4.51999L11.2602 3.79999V4.99999H12.7602V3.80999H12.7502Z"
            fill="#0E57CC" />
        <path
            d="M22 10.81V10.85C21.78 10.77 21.54 10.73 21.3 10.73H17.82C16.27 10.73 14.88 11.59 14.19 12.97L13.44 14.45H10.58L9.83 12.98C9.14 11.59 7.75 10.73 6.2 10.73H2.7C2.46 10.73 2.22 10.77 2 10.85V10.81C2 7.17 4.17 5 7.81 5H11.25V9C11.25 9.41 11.59 9.75 12 9.75C12.41 9.75 12.75 9.41 12.75 9V5H16.19C19.83 5 22 7.17 22 10.81Z"
            fill="#0E57CC" />
    </svg>

    <!-- gear -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'gear'">
        <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- special-send -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'special-send'">
        <path
            d="M19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M21.2501 18.4699L19.6001 18.8599C19.2301 18.9499 18.9401 19.2299 18.8601 19.5999L18.5101 21.0699C18.3201 21.8699 17.3001 22.1099 16.7701 21.4799L12.0001 15.9999L7.23008 21.4899C6.70008 22.1199 5.68008 21.8799 5.49008 21.0799L5.14008 19.6099C5.05008 19.2399 4.76008 18.9499 4.40008 18.8699L2.75008 18.4799C1.99008 18.2999 1.72008 17.3499 2.27008 16.7999L6.17008 12.8999C7.25008 14.4999 8.96008 15.6299 10.9501 15.9199C11.2901 15.9799 11.6401 16.0099 12.0001 16.0099C12.3601 16.0099 12.7101 15.9799 13.0501 15.9199C15.0401 15.6299 16.7501 14.4999 17.8301 12.8999L21.7301 16.7999C22.2801 17.3399 22.0101 18.2899 21.2501 18.4699Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'special-send-blue'">
        <path
            d="M21.2502 18.4701L19.6002 18.8601C19.2302 18.9501 18.9402 19.2301 18.8602 19.6001L18.5102 21.0701C18.3202 21.8701 17.3002 22.1201 16.7702 21.4901L13.7802 18.0501C13.5402 17.7701 13.6702 17.3301 14.0302 17.2401C15.8002 16.8101 17.3902 15.8201 18.5602 14.4101C18.7502 14.1801 19.0902 14.1501 19.3002 14.3601L21.5202 16.5801C22.2802 17.3401 22.0102 18.2901 21.2502 18.4701Z"
            fill="#0E57CC" />
        <path
            d="M2.70016 18.4701L4.35016 18.8601C4.72016 18.9501 5.01016 19.2301 5.09016 19.6001L5.44016 21.0701C5.63016 21.8701 6.65016 22.1201 7.18016 21.4901L10.1702 18.0501C10.4102 17.7701 10.2802 17.3301 9.92016 17.2401C8.15016 16.8101 6.56016 15.8201 5.39016 14.4101C5.20016 14.1801 4.86016 14.1501 4.65016 14.3601L2.43016 16.5801C1.67016 17.3401 1.94016 18.2901 2.70016 18.4701Z"
            fill="#0E57CC" />
        <path
            d="M12 2C8.13 2 5 5.13 5 9C5 10.45 5.43 11.78 6.17 12.89C7.25 14.49 8.96 15.62 10.95 15.91C11.29 15.97 11.64 16 12 16C12.36 16 12.71 15.97 13.05 15.91C15.04 15.62 16.75 14.49 17.83 12.89C18.57 11.78 19 10.45 19 9C19 5.13 15.87 2 12 2ZM15.06 8.78L14.23 9.61C14.09 9.75 14.01 10.02 14.06 10.22L14.3 11.25C14.49 12.06 14.06 12.38 13.34 11.95L12.34 11.36C12.16 11.25 11.86 11.25 11.68 11.36L10.68 11.95C9.96 12.37 9.53 12.06 9.72 11.25L9.96 10.22C10 10.03 9.93 9.75 9.79 9.61L8.94 8.78C8.45 8.29 8.61 7.8 9.29 7.69L10.36 7.51C10.54 7.48 10.75 7.32 10.83 7.16L11.42 5.98C11.74 5.34 12.26 5.34 12.58 5.98L13.17 7.16C13.25 7.32 13.46 7.48 13.65 7.51L14.72 7.69C15.39 7.8 15.55 8.29 15.06 8.78Z"
            fill="#0E57CC" />
    </svg>

    <!-- upload -->

    <svg width="22" height="22" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'upload'">
        <path d="M12 8.79932V2.79932L10 4.79932" stroke="#116DFF" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M12 2.79932L14 4.79932" stroke="#116DFF" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M7 12.7993C3 12.7993 3 14.5893 3 16.7993V17.7993C3 20.5593 3 22.7993 8 22.7993H16C20 22.7993 21 20.5593 21 17.7993V16.7993C21 14.5893 21 12.7993 17 12.7993C16 12.7993 15.72 13.0093 15.2 13.3993L14.18 14.4793C13 15.7393 11 15.7393 9.81 14.4793L8.8 13.3993C8.28 13.0093 8 12.7993 7 12.7993Z"
            stroke="#116DFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 12.7994V10.7994C5 8.78936 5 7.12936 8 6.83936" stroke="#116DFF" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 12.7994V10.7994C19 8.78936 19 7.12936 16 6.83936" stroke="#116DFF" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- download -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'download'">
        <path d="M12 2V8L14 6" stroke="#292D32" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 8L10 6" stroke="#292D32" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
            stroke="#292D32" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004" stroke="#292D32" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004" stroke="#292D32" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'download-blue'">
        <path d="M12 2V8L14 6" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 8L10 6" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
            stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 11.9991V7.99906C5 5.98906 5 4.32906 8 4.03906" stroke="#116DFF" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 11.9991V7.99906C19 5.98906 19 4.32906 16 4.03906" stroke="#116DFF" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- undo -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'undo'">
        <path
            d="M7.12891 18.3101H15.1289C17.8889 18.3101 20.1289 16.0701 20.1289 13.3101C20.1289 10.5501 17.8889 8.31006 15.1289 8.31006H4.12891"
            stroke="#292D32" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.43109 10.8099L3.87109 8.24994L6.43109 5.68994" stroke="#292D32" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- status up -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'status-up'">
        <path d="M6.87891 18.15V16.08" stroke="#333333" stroke-width="1.8" stroke-linecap="round" />
        <path d="M12 18.15V14.01" stroke="#333333" stroke-width="1.8" stroke-linecap="round" />
        <path d="M17.1211 18.1501V11.9301" stroke="#333333" stroke-width="1.8" stroke-linecap="round" />
        <path d="M17.1189 5.84998L16.6589 6.38998C14.1089 9.36998 10.6889 11.48 6.87891 12.43" stroke="#333333"
            stroke-width="1.8" stroke-linecap="round" />
        <path d="M14.1914 5.84998H17.1214V8.76998" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#333333"
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- left right -->

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'left-right'">
        <path d="M15.2803 8.44977L19.0002 4.72974L15.2803 1.00977" stroke="#333333" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 4.72949H19" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.71997 11.5498L1 15.2698L4.71997 18.9898" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19 15.2695H1" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- profile -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'profile'">
        <path
            d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7.16021 14.56C4.74021 16.18 4.74021 18.82 7.16021 20.43C9.91021 22.27 14.4202 22.27 17.1702 20.43C19.5902 18.81 19.5902 16.17 17.1702 14.56C14.4302 12.73 9.92021 12.73 7.16021 14.56Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'border-profile'">
        <path
            d="M12.1202 12.7805C12.0502 12.7705 11.9602 12.7705 11.8802 12.7805C10.1202 12.7205 8.72021 11.2805 8.72021 9.51047C8.72021 7.70047 10.1802 6.23047 12.0002 6.23047C13.8102 6.23047 15.2802 7.70047 15.2802 9.51047C15.2702 11.2805 13.8802 12.7205 12.1202 12.7805Z"
            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M18.7398 19.3796C16.9598 21.0096 14.5998 21.9996 11.9998 21.9996C9.39977 21.9996 7.03977 21.0096 5.25977 19.3796C5.35977 18.4396 5.95977 17.5196 7.02977 16.7996C9.76977 14.9796 14.2498 14.9796 16.9698 16.7996C18.0398 17.5196 18.6398 18.4396 18.7398 19.3796Z"
            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- folder add -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'folder-add'">
        <path d="M12.0601 16.5V11.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M14.5 14H9.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
            stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" />
    </svg>

    <!-- add square -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'add-square'">
        <path d="M8 12H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 16V8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'add-circle'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 16V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'add-square-transparent'">
        <path d="M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 16V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!--  questions-->
    <svg v-else-if="name == 'question'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3598 7 20.5598V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M12.0001 11.3594V11.1494C12.0001 10.4694 12.4201 10.1094 12.8401 9.8194C13.2501 9.5394 13.66 9.17941 13.66 8.51941C13.66 7.59941 12.9201 6.85938 12.0001 6.85938C11.0801 6.85938 10.3401 7.59941 10.3401 8.51941"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.9955 13.75H12.0045" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!--  reply -->
    <svg v-else-if="name == 'reply'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.0009 7.42969V13.4297C22.0009 14.9297 21.5008 16.1797 20.6208 17.0597C19.7508 17.9297 18.5009 18.4297 17.0009 18.4297V20.5597C17.0009 21.3597 16.1109 21.8397 15.4509 21.3997L11.0009 18.4297H8.88086C8.96086 18.1297 9.00085 17.8197 9.00085 17.4997C9.00085 16.4797 8.61086 15.5397 7.97086 14.8297C7.25086 14.0097 6.18085 13.4997 5.00085 13.4997C3.88085 13.4997 2.86086 13.9597 2.13086 14.7097C2.04086 14.3097 2.00085 13.8797 2.00085 13.4297V7.42969C2.00085 4.42969 4.00085 2.42969 7.00085 2.42969H17.0009C20.0009 2.42969 22.0009 4.42969 22.0009 7.42969Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.99658 17.5C8.99658 18.25 8.78659 18.96 8.4166 19.56C8.2066 19.92 7.93659 20.24 7.62659 20.5C6.92659 21.13 6.00658 21.5 4.99658 21.5C3.53658 21.5 2.26657 20.72 1.57657 19.56C1.20657 18.96 0.996582 18.25 0.996582 17.5C0.996582 16.24 1.57658 15.11 2.49658 14.38C3.18658 13.83 4.05658 13.5 4.99658 13.5C7.20658 13.5 8.99658 15.29 8.99658 17.5Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.43579 17.4995L4.42578 18.4895L6.55579 16.5195" stroke="#333333" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.49829 10.5H15.4983" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!--  diagram -->
    <svg v-else-if="name == 'diagram'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2.00085 2V19C2.00085 20.66 3.34085 22 5.00085 22H22.0009" stroke="#333333" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!--  cup -->
    <svg v-else-if="name == 'cup'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.15 16.5V18.6" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.15002 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15002C8.05002 19 7.15002 19.9 7.15002 21V22V22Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" />
        <path d="M6.15002 22H18.15" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M5.47004 11.6496C4.72004 11.4096 4.06004 10.9696 3.54004 10.4496C2.64004 9.44961 2.04004 8.24961 2.04004 6.84961C2.04004 5.44961 3.14004 4.34961 4.54004 4.34961H5.19004C4.99004 4.80961 4.89004 5.31961 4.89004 5.84961V8.84961C4.89004 9.84961 5.10004 10.7896 5.47004 11.6496Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M18.53 11.6496C19.28 11.4096 19.94 10.9696 20.46 10.4496C21.36 9.44961 21.96 8.24961 21.96 6.84961C21.96 5.44961 20.86 4.34961 19.46 4.34961H18.81C19.01 4.80961 19.11 5.31961 19.11 5.84961V8.84961C19.11 9.84961 18.9 10.7896 18.53 11.6496Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!--  clock -->
    <svg v-else-if="name == 'clock'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
            stroke="#116DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.7089 15.1798L12.6089 13.3298C12.0689 13.0098 11.6289 12.2398 11.6289 11.6098V7.50977"
            stroke="#116DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'important'">
        <path
            d="M5.832 7.848L7.8 10.848L9.84 9.384L7.632 6.576L11.064 5.64L10.296 3.24L6.936 4.488L7.08 0.912H4.584L4.728 4.488L1.392 3.216L0.6 5.616L4.032 6.576L1.8 9.384L3.864 10.824L5.832 7.848Z"
            fill="#FF1111" />
    </svg>
    <!--  clock-transparent -->
    <svg v-else-if="name == 'clock-transparent'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.7089 15.1798L12.6089 13.3298C12.0689 13.0098 11.6289 12.2398 11.6289 11.6098V7.50977"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'important'">
        <path
            d="M5.832 7.848L7.8 10.848L9.84 9.384L7.632 6.576L11.064 5.64L10.296 3.24L6.936 4.488L7.08 0.912H4.584L4.728 4.488L1.392 3.216L0.6 5.616L4.032 6.576L1.8 9.384L3.864 10.824L5.832 7.848Z"
            fill="#FF1111" />
    </svg>

    <!-- eye  -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'eye'">
        <path
            d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M11.9998 20.2707C15.5298 20.2707 18.8198 18.1907 21.1098 14.5907C22.0098 13.1807 22.0098 10.8107 21.1098 9.4007C18.8198 5.8007 15.5298 3.7207 11.9998 3.7207C8.46984 3.7207 5.17984 5.8007 2.88984 9.4007C1.98984 10.8107 1.98984 13.1807 2.88984 14.5907C5.17984 18.1907 8.46984 20.2707 11.9998 20.2707Z"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- eye slash -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'eye-slash'">
        <path
            d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.41992 19.5297C9.55992 20.0097 10.7699 20.2697 11.9999 20.2697C15.5299 20.2697 18.8199 18.1897 21.1099 14.5897C22.0099 13.1797 22.0099 10.8097 21.1099 9.39969C20.7799 8.87969 20.4199 8.38969 20.0499 7.92969"
            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.5095 12.6992C15.2495 14.1092 14.0995 15.2592 12.6895 15.5192" stroke="#333333" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.47 14.5312L2 22.0013" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M21.9993 2L14.5293 9.47" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- flags -->

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'usa-flag'">
        <g clip-path="url(#clip0_621_19244)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M-0.00585938 6.01758H32V7.55383H-0.00585938V6.01758ZM-0.00585938 9.09005H32V10.6263H-0.00585938V9.09005ZM-0.00585938 12.1586H32V13.6987H-0.00585938V12.1586ZM-0.00585938 15.2311H32V16.7673H-0.00585938V15.2311ZM-0.00585938 18.3036H32V19.8398H-0.00585938V18.3036ZM-0.00585938 21.3721H32V22.9084H-0.00585938V21.3721ZM-0.00585938 24.4446H32V25.9808H-0.00585938V24.4446Z"
                fill="#BD3D44" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M-0.00585938 7.55469H32V9.0909H-0.00585938V7.55469ZM-0.00585938 10.6271H32V12.1595H-0.00585938V10.6271ZM-0.00585938 13.6957H32V15.2319H-0.00585938V13.6957ZM-0.00585938 16.7682H32V18.3044H-0.00585938V16.7682ZM-0.00585938 19.8407H32V21.3769H-0.00585938V19.8407ZM-0.00585938 22.9092H32V24.4455H-0.00585938V22.9092Z"
                fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00585938 6.01758H15.1654V16.7673H-0.00585938V6.01758Z"
                fill="#192F5D" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.25672 6.47754L1.39708 6.90247H1.8416L1.48284 7.16373L1.61934 7.59261L1.25672 7.32747L0.898001 7.5887L1.03446 7.16373L0.671875 6.90247H1.12417L1.25672 6.47754ZM3.78723 6.47754L3.92368 6.90247H4.37207L4.00944 7.16373L4.14594 7.59261L3.78723 7.32747L3.4246 7.5887L3.56106 7.16373L3.20234 6.90247H3.64686L3.78723 6.47754ZM6.31383 6.47754L6.45419 6.90251H6.8948L6.53608 7.16378L6.6725 7.59265L6.30992 7.32752L5.9512 7.58874L6.08766 7.16378L5.72503 6.90251H6.17346L6.31383 6.47754ZM8.84434 6.47754L8.98075 6.90251H9.42918L9.06655 7.16378L9.20692 7.59265L8.84429 7.32752L8.48171 7.58874L8.62208 7.16378L8.25945 6.90251H8.70397L8.84434 6.47754ZM11.3709 6.47754L11.5113 6.90251H11.9558L11.5971 7.16378L11.7335 7.59265L11.3709 7.32752L11.0122 7.58874L11.1487 7.16378L10.79 6.90251H11.2344L11.3709 6.47754ZM13.9014 6.47754L14.0379 6.90251H14.4863L14.1237 7.16378L14.264 7.59265L13.9014 7.32752L13.5388 7.58874L13.6791 7.16378L13.3166 6.90251H13.7649L13.9014 6.47754ZM2.52393 7.5536L2.66038 7.97865H3.10877L2.74614 8.23984L2.87873 8.66489L2.52779 8.40362L2.16521 8.66485L2.29385 8.23988L1.94295 7.97861H2.38747L2.52393 7.5536ZM5.05053 7.5536L5.19089 7.97865H5.63537L5.27274 8.23984L5.41315 8.66489L5.05048 8.40362L4.6879 8.66485L4.82827 8.23988L4.46564 7.97861H4.91403L5.05053 7.5536ZM7.58104 7.5536L7.71745 7.97865H8.16588L7.80325 8.23984L7.93971 8.66489L7.58099 8.40362L7.21841 8.66485L7.35487 8.23992L6.99615 7.97865H7.44067L7.58104 7.5536ZM10.1076 7.5536L10.248 7.97865H10.6925L10.3299 8.23984L10.4702 8.66489L10.1076 8.40362L9.74888 8.66485L9.88538 8.23988L9.52275 7.97861H9.97505L10.1076 7.5536ZM12.6381 7.5536L12.7746 7.97865H13.223L12.8604 8.23984L12.9968 8.66489L12.6381 8.40362L12.2755 8.66485L12.412 8.23988L12.0533 7.97861H12.4977L12.6381 7.5536ZM1.25672 8.62596L1.39708 9.05875H1.8416L1.48284 9.31997L1.61934 9.74498L1.25672 9.47985L0.898001 9.74498L1.03446 9.31607L0.671875 9.05488H1.12417L1.25672 8.62596ZM3.78723 8.62596L3.92368 9.05475H4.37207L4.00944 9.31598L4.14594 9.74103L3.78723 9.47585L3.4246 9.74099L3.56106 9.31211L3.20234 9.05089H3.64686L3.78723 8.62596ZM6.31383 8.62596L6.45419 9.05484H6.8948L6.53608 9.31607L6.6725 9.74112L6.30992 9.47594L5.9512 9.74107L6.08766 9.3122L5.72503 9.05097H6.17346L6.31383 8.62596ZM8.84434 8.62596L8.98075 9.05484H9.42918L9.06655 9.31607L9.20692 9.74112L8.84429 9.47594L8.48171 9.74107L8.62208 9.3122L8.25945 9.05097H8.70397L8.84434 8.62596ZM11.3709 8.62596L11.5113 9.05484H11.9558L11.5971 9.31602L11.7335 9.74107L11.3709 9.4759L11.0122 9.74103L11.1487 9.31216L10.79 9.05093H11.2344L11.3709 8.62596ZM13.9014 8.62596L14.0379 9.05484H14.4863L14.1237 9.31607L14.264 9.74112L13.9014 9.47594L13.5388 9.74107L13.6791 9.3122L13.3166 9.05097H13.7649L13.9014 8.62596ZM2.52393 9.70206L2.66038 10.1271H3.10877L2.74614 10.3883L2.88264 10.8172L2.52393 10.552L2.1613 10.8133L2.29776 10.3883L1.93904 10.1271H2.3836L2.52393 9.70206ZM5.05053 9.70206L5.19089 10.1271H5.63537L5.27274 10.3883L5.41315 10.8172L5.05048 10.552L4.6879 10.8133L4.82827 10.3883L4.46564 10.1271H4.91403L5.05053 9.70206ZM7.58104 9.70206L7.71745 10.1271H8.16588L7.80325 10.3883L7.93971 10.8172L7.58099 10.552L7.21841 10.8133L7.35487 10.3883L6.99615 10.1271H7.44067L7.58104 9.70206ZM10.1076 9.70206L10.248 10.1271H10.6925L10.3338 10.3883L10.4702 10.8172L10.1076 10.552L9.74888 10.8133L9.88538 10.3883L9.52275 10.1271H9.97505L10.1076 9.70206ZM12.6381 9.70206L12.7746 10.1271H13.223L12.8604 10.3883L12.9968 10.8172L12.6381 10.552L12.2755 10.8133L12.412 10.3883L12.0533 10.1271H12.4977L12.6381 9.70206ZM1.25672 10.7782L1.39708 11.2032H1.8416L1.48284 11.4644L1.61934 11.8933L1.25672 11.6282L0.898001 11.8894L1.03446 11.4644L0.671875 11.2032H1.12417L1.25672 10.7782ZM3.78723 10.7782L3.92368 11.2032H4.37207L4.00944 11.4644L4.14594 11.8895L3.78723 11.6282L3.4246 11.8894L3.56106 11.4644L3.20234 11.2032H3.64686L3.78723 10.7782ZM6.31383 10.7782L6.45419 11.2032H6.8948L6.53608 11.4644L6.6725 11.8933L6.30992 11.6282L5.9512 11.8894L6.08766 11.4644L5.72503 11.2032H6.17346L6.31383 10.7782ZM8.84434 10.7782L8.98075 11.2032H9.42918L9.06655 11.4644L9.20692 11.8933L8.84429 11.6282L8.48171 11.8894L8.62208 11.4644L8.25945 11.2032H8.70397L8.84434 10.7782ZM11.3709 10.7782L11.5113 11.2032H11.9558L11.5971 11.4644L11.7335 11.8933L11.3709 11.6282L11.0122 11.8894L11.1487 11.4644L10.79 11.2032H11.2344L11.3709 10.7782ZM13.9014 10.7782L14.0379 11.2032H14.4863L14.1237 11.4644L14.264 11.8933L13.9014 11.6282L13.5388 11.8894L13.6791 11.4644L13.3166 11.2032H13.7649L13.9014 10.7782ZM2.52393 11.8544L2.66038 12.2794H3.10877L2.74614 12.5405L2.88264 12.9656L2.52393 12.7005L2.1613 12.9656L2.29776 12.5367L1.93904 12.2755H2.3836L2.52393 11.8544ZM5.05053 11.8544L5.19089 12.2794H5.63537L5.27274 12.5405L5.41315 12.9656L5.05048 12.7005L4.6879 12.9656L4.82827 12.5367L4.46564 12.2755H4.91403L5.05053 11.8544ZM7.58104 11.8544L7.71745 12.2794H8.16588L7.80325 12.5405L7.93971 12.9656L7.58099 12.7005L7.21841 12.9656L7.35487 12.5367L6.99615 12.2755H7.44067L7.58104 11.8544ZM10.1076 11.8544L10.248 12.2794H10.6925L10.3338 12.5405L10.4702 12.9656L10.1076 12.7005L9.74888 12.9656L9.88538 12.5367L9.52275 12.2755H9.97505L10.1076 11.8544ZM12.6381 11.8544L12.7746 12.2794H13.223L12.8604 12.5405L12.9968 12.9656L12.6381 12.7005L12.2755 12.9656L12.412 12.5367L12.0533 12.2755H12.4977L12.6381 11.8544ZM1.25672 12.9266L1.39708 13.3555H1.8416L1.48284 13.6167L1.61934 14.0378L1.25672 13.7766L0.898001 14.0378L1.03446 13.6128L0.671875 13.3516H1.12417L1.25672 12.9266ZM3.78723 12.9266L3.92368 13.3555H4.37207L4.00944 13.6167L4.14985 14.0378L3.78718 13.7766L3.4246 14.0378L3.56497 13.6128L3.20234 13.3516H3.64686L3.78723 12.9266ZM6.31383 12.9266L6.45419 13.3555H6.8948L6.53608 13.6167L6.6725 14.0378L6.30992 13.7766L5.9512 14.0378L6.08766 13.6128L5.72503 13.3516H6.17346L6.31383 12.9266ZM8.84434 12.9266L8.98075 13.3555H9.42918L9.06655 13.6167L9.20692 14.0378L8.84429 13.7766L8.48171 14.0378L8.62208 13.6128L8.25945 13.3516H8.70397L8.84434 12.9266ZM11.3709 12.9266L11.5113 13.3555H11.9558L11.5971 13.6167L11.7335 14.0378L11.3709 13.7766L11.0122 14.0378L11.1487 13.6128L10.79 13.3516H11.2344L11.3709 12.9266ZM13.9014 12.9266L14.0379 13.3555H14.4863L14.1237 13.6167L14.264 14.0378L13.9014 13.7766L13.5388 14.0378L13.6791 13.6128L13.3166 13.3516H13.7649L13.9014 12.9266ZM2.52393 14.0027L2.66038 14.4277H3.10877L2.74614 14.689L2.88264 15.1179L2.52393 14.8528L2.1613 15.1139L2.29776 14.689L1.93904 14.4277H2.3836L2.52393 14.0027ZM5.05053 14.0027L5.19089 14.4277H5.63537L5.27274 14.689L5.41315 15.1179L5.05048 14.8528L4.6879 15.1139L4.82827 14.689L4.46564 14.4277H4.91403L5.05053 14.0027ZM7.58104 14.0027L7.71745 14.4277H8.16588L7.80325 14.689L7.93971 15.1179L7.58099 14.8528L7.21841 15.1139L7.35487 14.689L6.99615 14.4277H7.44067L7.58104 14.0027ZM10.1076 14.0027L10.248 14.4277H10.6925L10.3338 14.689L10.4702 15.1179L10.1076 14.8528L9.74888 15.1139L9.88538 14.689L9.52275 14.4277H9.97505L10.1076 14.0027ZM12.6381 14.0027L12.7746 14.4277H13.223L12.8604 14.689L12.9968 15.1179L12.6381 14.8528L12.2755 15.1139L12.412 14.689L12.0533 14.4277H12.4977L12.6381 14.0027ZM1.25672 15.0789L1.39708 15.5039H1.8416L1.48284 15.7651L1.61934 16.1901L1.25672 15.9289L0.898001 16.1901L1.03446 15.7612L0.671875 15.5H1.12417L1.25672 15.0789ZM3.78723 15.0789L3.92368 15.5039H4.37207L4.00944 15.7651L4.14985 16.1901L3.78718 15.9289L3.4246 16.1901L3.56497 15.7612L3.20234 15.5H3.64686L3.78723 15.0789ZM6.31383 15.0789L6.45419 15.5039H6.8948L6.54386 15.7651L6.68032 16.1901L6.31769 15.9289L5.95898 16.1901L6.09548 15.7612L5.73285 15.5H6.18124L6.31383 15.0789ZM8.84434 15.0789L8.98075 15.5039H9.42918L9.06655 15.7651L9.20692 16.1901L8.84429 15.9289L8.48171 16.1901L8.62208 15.7612L8.25945 15.5H8.70397L8.84434 15.0789ZM11.3709 15.0789L11.5113 15.5039H11.9558L11.5971 15.7651L11.7335 16.1901L11.3709 15.9289L11.0122 16.1901L11.1487 15.7612L10.79 15.5H11.2344L11.3709 15.0789ZM13.9014 15.0789L14.0379 15.5039H14.4863L14.1237 15.7651L14.264 16.1901L13.9014 15.9289L13.5388 16.1901L13.6791 15.7612L13.3166 15.5H13.7649L13.9014 15.0789Z"
                fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_621_19244">
                <rect width="32" height="32" fill="white" />
            </clipPath>
        </defs>
    </svg>

    <!-- key  -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'key'">
        <path
            d="M19.7887 14.9303C17.7287 16.9803 14.7787 17.6103 12.1887 16.8003L7.47868 21.5003C7.13868 21.8503 6.46868 22.0603 5.98868 21.9903L3.80868 21.6903C3.08868 21.5903 2.41868 20.9103 2.30868 20.1903L2.00868 18.0103C1.93868 17.5303 2.16868 16.8603 2.49868 16.5203L7.19868 11.8203C6.39868 9.22031 7.01868 6.27031 9.07868 4.22031C12.0287 1.27031 16.8187 1.27031 19.7787 4.22031C22.7387 7.17031 22.7387 11.9803 19.7887 14.9303Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.89062 17.4902L9.19062 19.7902" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- mobile  -->

    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'mobile'">
        <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="#333333"
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11 4.5H7" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.99922 18.1C9.85526 18.1 10.5492 17.406 10.5492 16.55C10.5492 15.694 9.85526 15 8.99922 15C8.14318 15 7.44922 15.694 7.44922 16.55C7.44922 17.406 8.14318 18.1 8.99922 18.1Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- mobile transparent  -->

    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'mobile-transparent'">
        <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="currentColor"
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11 4.5H7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.99922 18.1C9.85526 18.1 10.5492 17.406 10.5492 16.55C10.5492 15.694 9.85526 15 8.99922 15C8.14318 15 7.44922 15.694 7.44922 16.55C7.44922 17.406 8.14318 18.1 8.99922 18.1Z"
            stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- danger  -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'danger'">
        <path d="M12 9V14" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M11.9994 21.4103H5.93944C2.46944 21.4103 1.01944 18.9303 2.69944 15.9003L5.81944 10.2803L8.75944 5.00027C10.5394 1.79027 13.4594 1.79027 15.2394 5.00027L18.1794 10.2903L21.2994 15.9103C22.9794 18.9403 21.5194 21.4203 18.0594 21.4203H11.9994V21.4103Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.9961 17H12.0051" stroke="#333333" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- setting -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'setting'">
        <path
            d="M3 9.10937V14.8794C3 16.9994 3 16.9994 5 18.3494L10.5 21.5294C11.33 22.0094 12.68 22.0094 13.5 21.5294L19 18.3494C21 16.9994 21 16.9994 21 14.8894V9.10937C21 6.99937 21 6.99937 19 5.64937L13.5 2.46937C12.68 1.98938 11.33 1.98938 10.5 2.46937L5 5.64937C3 6.99937 3 6.99937 3 9.10937Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- ranking -->

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name === 'ranking'">
        <path d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" stroke="#333333" stroke-width="1.8" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z"
            stroke="#333333" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19.9981 17H15.3281V22H21.9981V19C21.9981 17.9 21.0981 17 19.9981 17Z" stroke="#333333"
            stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M12.5183 2.0708L13.0483 3.1308C13.1183 3.2808 13.3083 3.42079 13.4683 3.44079L14.4283 3.6008C15.0383 3.7008 15.1883 4.15078 14.7483 4.58078L13.9983 5.33078C13.8683 5.46078 13.7983 5.70079 13.8383 5.87079L14.0483 6.7908C14.2183 7.5208 13.8283 7.80081 13.1883 7.42081L12.2883 6.89081C12.1283 6.79081 11.8583 6.79081 11.6983 6.89081L10.7983 7.42081C10.1583 7.80081 9.76828 7.5208 9.93828 6.7908L10.1483 5.87079C10.1883 5.70079 10.1183 5.45078 9.98828 5.33078L9.24828 4.59079C8.80828 4.15079 8.94828 3.71078 9.56828 3.61078L10.5283 3.4508C10.6883 3.4208 10.8783 3.28081 10.9483 3.14081L11.4783 2.08078C11.7683 1.50078 12.2283 1.5008 12.5183 2.0708Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!--  close circle -->
    <svg v-if="name == 'close-circle'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#333333"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.17188 14.8299L14.8319 9.16992" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M14.8319 14.8299L9.17188 9.16992" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <!--  close circle -->
    <svg v-if="name == 'close-circle-transparent'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.17188 14.8299L14.8319 9.16992" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M14.8319 14.8299L9.17188 9.16992" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <!--  tick circle -->
    <svg v-if="name == 'tick-circle'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#333333"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <!--  tick circle -->
    <svg v-if="name == 'tick-circle-transparent'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-else-if="name == 'tick-circle-blue'">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#0E57CC"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#0E57CC" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- direct send -->
    <svg v-if="name == 'direct-send'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9V2L10 4" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 2L14 4" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805"
            stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7 5.13086C3.46 5.65086 2 7.73086 2 12.0009V15.0009C2 20.0009 4 22.0009 9 22.0009H15C20 22.0009 22 20.0009 22 15.0009V12.0009C22 7.73086 20.54 5.65086 17 5.13086"
            stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- direct send -->
    <svg v-if="name == 'sun'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
            stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- add -->
    <svg v-if="name == 'add'" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.44 9.76V6.04H5.56V9.76H2.06V11.56H5.56V15.28H7.44V11.56H10.94V9.76H7.44Z" fill="white" />
    </svg>

    <!-- receive -->
    <svg v-if="name == 'receive'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V8L14 6" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 8L10 6" stroke="#116DFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
            stroke="#116DFF" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 11.9991V7.99906C5 5.98906 5 4.32906 8 4.03906" stroke="#116DFF" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 11.9991V7.99906C19 5.98906 19 4.32906 16 4.03906" stroke="#116DFF" stroke-width="1.8"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="name == 'presention-chart'">
        <path d="M5.89999 17H18.09C19.99 17 20.99 16 20.99 14.1V2H2.98999V14.1C2.99999 16 3.99999 17 5.89999 17Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M2 2H22" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M8 22L12 20V17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M16 22L12 20" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'data'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z"
            fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20Z"
            fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20Z"
            fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z"
            fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M12 6L12 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 18L20 14C20 12 19 11 17 11L7 11C5 11 4 12 4 14L4 18" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'copy'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'timer-pause'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 22C7.67 22 3.75 18.08 3.75 13.25C3.75 8.42 7.67 4.5 12.5 4.5C17.33 4.5 21.25 8.42 21.25 13.25"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.5 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.5 2H15.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19.5 17V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.5 17V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'repeat'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M4.08008 5.15997H17.9201C19.5801 5.15997 20.9201 6.49997 20.9201 8.15997V11.48" stroke="currentColor"
            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.24008 2L4.08008 5.15997L7.24008 8.32001" stroke="currentColor" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.9201 18.84H7.08008C5.42008 18.84 4.08008 17.5 4.08008 15.84V12.52" stroke="currentColor"
            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.7603 22L20.9203 18.84L17.7603 15.68" stroke="currentColor" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'export'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 11L21.7 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M22.5002 6.8V2H17.7002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M11.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15V13"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'user-remove'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.91016 22C3.91016 18.13 7.76015 15 12.5002 15C13.4602 15 14.3902 15.13 15.2602 15.37"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M22.5 18C22.5 18.32 22.46 18.63 22.38 18.93C22.29 19.33 22.13 19.72 21.92 20.06C21.23 21.22 19.96 22 18.5 22C17.47 22 16.54 21.61 15.84 20.97C15.54 20.71 15.28 20.4 15.08 20.06C14.71 19.46 14.5 18.75 14.5 18C14.5 16.92 14.93 15.93 15.63 15.21C16.36 14.46 17.38 14 18.5 14C19.68 14 20.75 14.51 21.47 15.33C22.11 16.04 22.5 16.98 22.5 18Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19.5299 16.94L17.4199 19.05" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.4399 16.96L19.5599 19.07" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'user-add'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.91016 22C3.91016 18.13 7.76015 15 12.5002 15C13.4602 15 14.3902 15.13 15.2602 15.37"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M22.5 18C22.5 18.32 22.46 18.63 22.38 18.93C22.29 19.33 22.13 19.72 21.92 20.06C21.23 21.22 19.96 22 18.5 22C17.47 22 16.54 21.61 15.84 20.97C15.54 20.71 15.28 20.4 15.08 20.06C14.71 19.46 14.5 18.75 14.5 18C14.5 16.92 14.93 15.93 15.63 15.21C16.36 14.46 17.38 14 18.5 14C19.68 14 20.75 14.51 21.47 15.33C22.11 16.04 22.5 16.98 22.5 18Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19.9897 17.98H17.0098" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.5 16.52V19.51" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'user-edit'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M19.7101 15.74L16.17 19.2801C16.03 19.4201 15.9 19.68 15.87 19.87L15.68 21.22C15.61 21.71 15.95 22.05 16.44 21.98L17.79 21.79C17.98 21.76 18.25 21.63 18.38 21.49L21.92 17.95C22.53 17.34 22.82 16.63 21.92 15.73C21.03 14.84 20.3201 15.13 19.7101 15.74Z"
            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19.2002 16.25C19.5002 17.33 20.3402 18.17 21.4202 18.47" stroke="currentColor" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.91016 22C3.91016 18.13 7.76018 15 12.5002 15C13.5402 15 14.5402 15.15 15.4702 15.43"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'end'" width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.224 0.199999V2.104H2.15V4.162H5.776V6.01H2.15V8.096H6.224V10H0.0780001V0.199999H6.224ZM14.2367 6.416V0.199999H16.3087V10H14.2087L10.1627 3.784H10.1207V10H8.0487V0.199999H10.1487L14.1807 6.416H14.2367ZM18.4667 0.199999H21.2247C24.4027 0.199999 26.4327 2.034 26.4327 5.1C26.4327 8.152 24.3887 10 21.2247 10H18.4667V0.199999ZM20.5387 8.068H21.3367C23.1847 8.068 24.3047 7.032 24.3047 5.1C24.3047 3.168 23.1847 2.132 21.3367 2.132H20.5387V8.068Z"
            fill="currentColor" />
    </svg>
    <svg v-if="name == 'illustrator'" width="18" height="18" viewBox="0 0 18 18" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M5.02539 12L7.65039 6L10.3504 12" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M5.625 9.97499H9.675" stroke="currentColor" stroke-miterlimit="10" />
        <path d="M12.2246 12V8.025" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M11.25 16.5H6.75C3 16.5 1.5 15 1.5 11.25V6.75C1.5 3 3 1.5 6.75 1.5H11.25C15 1.5 16.5 3 16.5 6.75V11.25C16.5 15 15 16.5 11.25 16.5Z"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.2549 6.02559V6.02559" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'emoji-happy'" width="18" height="18" viewBox="0 0 18 18" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M11.625 7.3125C12.2463 7.3125 12.75 6.80882 12.75 6.1875C12.75 5.56618 12.2463 5.0625 11.625 5.0625C11.0037 5.0625 10.5 5.56618 10.5 6.1875C10.5 6.80882 11.0037 7.3125 11.625 7.3125Z"
            stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M6.375 7.3125C6.99632 7.3125 7.5 6.80882 7.5 6.1875C7.5 5.56618 6.99632 5.0625 6.375 5.0625C5.75368 5.0625 5.25 5.56618 5.25 6.1875C5.25 6.80882 5.75368 7.3125 6.375 7.3125Z"
            stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M6.3 9.975H11.7C12.075 9.975 12.375 10.275 12.375 10.65C12.375 12.5175 10.8675 14.025 9 14.025C7.1325 14.025 5.625 12.5175 5.625 10.65C5.625 10.275 5.925 9.975 6.3 9.975Z"
            stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'receive-square-2'" width="18" height="18" viewBox="0 0 18 18" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.94336 10.005H11.1234V6.825" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.1229 10.005L6.87793 5.75999" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M4.5 12.3825C7.4175 13.3575 10.5825 13.3575 13.5 12.3825" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'attach-circle'" width="18" height="18" viewBox="0 0 18 18" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.15016 8.84998L8.09263 9.90748C7.50763 10.4925 7.50763 11.445 8.09263 12.03C8.67763 12.615 9.63015 12.615 10.2151 12.03L11.8802 10.365C13.0502 9.195 13.0502 7.29749 11.8802 6.11999C10.7102 4.94999 8.81264 4.94999 7.63514 6.11999L5.82016 7.93498C4.81516 8.93998 4.81516 10.5675 5.82016 11.5725"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'gallery'" width="18" height="18" viewBox="0 0 18 18" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M6.75 7.5C7.57843 7.5 8.25 6.82843 8.25 6C8.25 5.17157 7.57843 4.5 6.75 4.5C5.92157 4.5 5.25 5.17157 5.25 6C5.25 6.82843 5.92157 7.5 6.75 7.5Z"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M2.00293 14.2125L5.70043 11.73C6.29293 11.3325 7.14793 11.3775 7.68043 11.835L7.92793 12.0525C8.51293 12.555 9.45793 12.555 10.0429 12.0525L13.1629 9.375C13.7479 8.8725 14.6929 8.8725 15.2779 9.375L16.5004 10.425"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-if="name == 'tick-circle-green'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
            fill="#2EBC39" />
        <path
            d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
            fill="#2EBC39" />
    </svg>

    <svg v-if="name == 'close-circle-red'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
            fill="red" />
        <path
            d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z"
            fill="red" />
        <path
            d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z"
            fill="red" />
    </svg>

    <svg v-if="name == 'edit-pen-blue'" width="24" height="24" viewBox="0 0 24 24" fill="#116DFF"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
            fill="#116DFF" />
        <path
            d="M8.49935 17.6901C7.88935 17.6901 7.32935 17.4701 6.91935 17.0701C6.42935 16.5801 6.21935 15.8701 6.32935 15.1201L6.75935 12.1101C6.83935 11.5301 7.21935 10.7801 7.62935 10.3701L15.5093 2.49006C17.4993 0.500059 19.5193 0.500059 21.5093 2.49006C22.5993 3.58006 23.0893 4.69006 22.9893 5.80006C22.8993 6.70006 22.4193 7.58006 21.5093 8.48006L13.6293 16.3601C13.2193 16.7701 12.4693 17.1501 11.8893 17.2301L8.87935 17.6601C8.74935 17.6901 8.61935 17.6901 8.49935 17.6901ZM16.5693 3.55006L8.68935 11.4301C8.49935 11.6201 8.27935 12.0601 8.23935 12.3201L7.80935 15.3301C7.76935 15.6201 7.82935 15.8601 7.97935 16.0101C8.12935 16.1601 8.36935 16.2201 8.65935 16.1801L11.6693 15.7501C11.9293 15.7101 12.3793 15.4901 12.5593 15.3001L20.4393 7.42006C21.0893 6.77006 21.4293 6.19006 21.4793 5.65006C21.5393 5.00006 21.1993 4.31006 20.4393 3.54006C18.8393 1.94006 17.7393 2.39006 16.5693 3.55006Z"
            fill="#116DFF" />
        <path
            d="M19.8496 9.82978C19.7796 9.82978 19.7096 9.81978 19.6496 9.79978C17.0196 9.05978 14.9296 6.96978 14.1896 4.33978C14.0796 3.93978 14.3096 3.52978 14.7096 3.40978C15.1096 3.29978 15.5196 3.52978 15.6296 3.92978C16.2296 6.05978 17.9196 7.74978 20.0496 8.34978C20.4496 8.45978 20.6796 8.87978 20.5696 9.27978C20.4796 9.61978 20.1796 9.82978 19.8496 9.82978Z"
            fill="#116DFF" />
    </svg>
    <svg v-if="name == 'edit-transparent'" width="24" height="24" viewBox="0 0 24 24" fill="#116DFF"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
            fill="currentColor" />
        <path
            d="M8.49935 17.6901C7.88935 17.6901 7.32935 17.4701 6.91935 17.0701C6.42935 16.5801 6.21935 15.8701 6.32935 15.1201L6.75935 12.1101C6.83935 11.5301 7.21935 10.7801 7.62935 10.3701L15.5093 2.49006C17.4993 0.500059 19.5193 0.500059 21.5093 2.49006C22.5993 3.58006 23.0893 4.69006 22.9893 5.80006C22.8993 6.70006 22.4193 7.58006 21.5093 8.48006L13.6293 16.3601C13.2193 16.7701 12.4693 17.1501 11.8893 17.2301L8.87935 17.6601C8.74935 17.6901 8.61935 17.6901 8.49935 17.6901ZM16.5693 3.55006L8.68935 11.4301C8.49935 11.6201 8.27935 12.0601 8.23935 12.3201L7.80935 15.3301C7.76935 15.6201 7.82935 15.8601 7.97935 16.0101C8.12935 16.1601 8.36935 16.2201 8.65935 16.1801L11.6693 15.7501C11.9293 15.7101 12.3793 15.4901 12.5593 15.3001L20.4393 7.42006C21.0893 6.77006 21.4293 6.19006 21.4793 5.65006C21.5393 5.00006 21.1993 4.31006 20.4393 3.54006C18.8393 1.94006 17.7393 2.39006 16.5693 3.55006Z"
            fill="currentColor" />
        <path
            d="M19.8496 9.82978C19.7796 9.82978 19.7096 9.81978 19.6496 9.79978C17.0196 9.05978 14.9296 6.96978 14.1896 4.33978C14.0796 3.93978 14.3096 3.52978 14.7096 3.40978C15.1096 3.29978 15.5196 3.52978 15.6296 3.92978C16.2296 6.05978 17.9196 7.74978 20.0496 8.34978C20.4496 8.45978 20.6796 8.87978 20.5696 9.27978C20.4796 9.61978 20.1796 9.82978 19.8496 9.82978Z"
            fill="currentColor" />
    </svg>

    <svg v-if="name === 'forward-blue'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none">
        <path stroke="#116dff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
            d="M16.87 18.31h-8c-2.76 0-5-2.24-5-5s2.24-5 5-5h11"></path>
        <path stroke="#116dff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M17.57 10.81l2.56-2.56-2.56-2.56"></path>
    </svg>



    <svg v-if="name === 'code-circle'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10L6 12L8 14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M16 10L18 12L16 14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13 9.66992L11 14.33" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>


    <svg v-if="name === 'document-code'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#292D32"
            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#292D32" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 13L8 15L10 17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M14 13L16 15L14 17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="name == 'charge-account'" fill="#000000" viewBox="0 0 64 64" id="Layer_1_1_" version="1.1"
        xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <path
                    d="M61.493,41.902l-1.624-3.073C59.946,38.564,60,38.289,60,38c0-0.771-0.301-1.468-0.78-2c0.48-0.532,0.78-1.229,0.78-2 s-0.301-1.468-0.78-2c0.48-0.532,0.78-1.229,0.78-2c0-0.395-0.081-0.77-0.22-1.116C61.055,28.538,62,27.383,62,26 c0-1.654-1.346-3-3-3h-0.277l2.882-5.042C61.863,17.506,62,16.991,62,16.469V16c0-1.654-1.346-3-3-3 c-1.506,0-2.32,0.724-2.915,1.252C55.578,14.703,55.243,15,54.497,15c-0.745,0-1.08-0.297-1.587-0.748 C52.315,13.724,51.501,13,49.995,13c-1.505,0-2.319,0.724-2.914,1.252C46.574,14.703,46.24,15,45.495,15 c-0.743,0-1.077-0.297-1.582-0.747C43.318,13.724,42.505,13,41,13c-1.654,0-3,1.346-3,3v0.469c0,0.522,0.137,1.037,0.396,1.488 L39.563,20h-1.327c-1.097,0-2.192,0.19-3.236,0.529V6c0-2.757-2.243-5-5-5H6C3.243,1,1,3.243,1,6v52c0,2.757,2.243,5,5,5h24 c2.757,0,5-2.243,5-5V38.811c0.171,0.086,0.346,0.162,0.511,0.261l0.949,0.57c0.832,0.499,1.737,0.851,2.672,1.076l-0.625,1.183 C37.521,43.767,37,45.867,37,48c0,7.168,5.832,13,13,13s13-5.832,13-13.024C63,45.867,62.479,43.767,61.493,41.902z M40,16 c0-0.551,0.448-1,1-1c0.743,0,1.078,0.297,1.583,0.747C43.178,16.276,43.991,17,45.495,17c1.505,0,2.319-0.724,2.914-1.252 C48.916,15.297,49.25,15,49.995,15s1.08,0.297,1.587,0.748C52.177,16.276,52.991,17,54.497,17s2.321-0.724,2.916-1.252 C57.92,15.297,58.255,15,59,15c0.552,0,1,0.449,1,1v0.469c0,0.174-0.046,0.345-0.132,0.496L56.42,23H43.58l-3.448-6.036 C40.046,16.814,40,16.643,40,16.469V16z M6,3h24c1.654,0,3,1.346,3,3v3H3V6C3,4.346,4.346,3,6,3z M30,61H6c-1.654,0-3-1.346-3-3v-3 h30v3C33,59.654,31.654,61,30,61z M33,53H3V11h30v10.343c-0.642,0.265-1.313,0.453-2,0.555V13H5v38h26V38h0.639 c0.459,0,0.913,0.057,1.361,0.14V53z M15,20v20h12v-2h2v11H7V15h22v7h-2v-2H15z M21,26v12h-4V22h4v2h2v-2h2v16h-2V26H21z M36.54,37.357C35.06,36.469,33.364,36,31.639,36H27V24h2.764c1.617,0,3.237-0.382,4.684-1.105c1.17-0.585,2.48-0.895,3.789-0.895 h2.469l1.714,3H59c0.552,0,1,0.449,1,1s-0.448,1-1,1h-2h-6h-6v2h6h6c0.552,0,1,0.449,1,1s-0.448,1-1,1h-6h-6v2h6h6 c0.552,0,1,0.449,1,1s-0.448,1-1,1H45v2h12c0.552,0,1,0.449,1,1s-0.448,1-1,1H41.361c-1.363,0-2.703-0.371-3.872-1.072 L36.54,37.357z M50,59c-6.065,0-11-4.935-11-11.024c0-1.784,0.44-3.562,1.274-5.139l0.974-1.844c0.038,0,0.075,0.008,0.112,0.008 H57c0.56,0,1.078-0.164,1.527-0.432l1.199,2.268C60.56,44.414,61,46.191,61,48C61,54.065,56.065,59,50,59z">
                </path>
                <path
                    d="M50,47c0.552,0,1,0.449,1,1h2c0-1.302-0.839-2.402-2-2.816V43h-2v2.184c-1.161,0.414-2,1.514-2,2.816c0,1.654,1.346,3,3,3 c0.552,0,1,0.449,1,1s-0.448,1-1,1s-1-0.449-1-1h-2c0,1.302,0.839,2.402,2,2.816V57h2v-2.184c1.161-0.414,2-1.514,2-2.816 c0-1.654-1.346-3-3-3c-0.552,0-1-0.449-1-1S49.448,47,50,47z">
                </path>
                <rect height="2" width="8" x="14" y="5"></rect>
                <rect height="2" width="2" x="24" y="5"></rect>
                <rect height="2" width="2" x="10" y="5"></rect>
                <rect height="2" width="6" x="15" y="57"></rect>
            </g>
        </g>
    </svg>

    <svg v-if="name == 'users'" width="25" height="25" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <circle cx="12" cy="6" r="4" stroke="currentColor" stroke-width="1.5"></circle>
            <path d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round"></path>
            <path
                d="M17.1973 15C17.7078 15.5883 18 16.2714 18 17C18 19.2091 15.3137 21 12 21C8.68629 21 6 19.2091 6 17C6 14.7909 8.68629 13 12 13C12.3407 13 12.6748 13.0189 13 13.0553"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round"></path>
        </g>
    </svg>
    <svg v-if="name == 'circle-pending'" height="30" width="30" viewBox="0 0 1024 1024" class="icon" version="1.1"
        xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M511.9 183c-181.8 0-329.1 147.4-329.1 329.1s147.4 329.1 329.1 329.1c181.8 0 329.1-147.4 329.1-329.1S693.6 183 511.9 183z m0 585.2c-141.2 0-256-114.8-256-256s114.8-256 256-256 256 114.8 256 256-114.9 256-256 256z"
                fill="#f09800"></path>
            <path d="M548.6 365.7h-73.2v161.4l120.5 120.5 51.7-51.7-99-99z" fill="#f09800"></path>
        </g>
    </svg>

    <svg v-if="name == 'dashboard'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M22 22L2 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path
                d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M4 22V9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M20 9.5V13.5M20 22V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path
                d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
                d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                stroke="currentColor" stroke-width="1.5"></path>
        </g>
    </svg>

    <svg v-else-if="name == 'purchase'" fill="currentColor" height="25" width="25" version="1.1" id="Layer_1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
        xml:space="preserve">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <g>
                    <g>
                        <path
                            d="M482.358,229.671h-63.223v-3.525c0-36.462-29.664-66.126-66.125-66.126c-36.461,0-66.125,29.664-66.125,66.126v3.525 h-31.563c12.826-21.276,19.54-45.428,19.54-70.687c0-75.781-61.651-137.434-137.432-137.434S0,83.202,0,158.983 s61.651,137.434,137.432,137.434c19.577,0,38.896-4.178,56.589-12.167v109.772l-10.426-8.229 c-5.027-3.966-12.61-3.968-17.641,0.001c-2.957,2.335-4.652,5.744-4.652,9.353v28.005H72.758 c-19.316,0-35.032-15.715-35.032-35.033v-97.012c0-4.466-3.62-8.084-8.084-8.084c-4.465,0-8.084,3.618-8.084,8.084v97.013 c0,28.232,22.969,51.201,51.2,51.201h88.544v28.006c0,3.609,1.695,7.018,4.652,9.353c0.001,0,0.002,0.001,0.003,0.002 c5.026,3.964,12.608,3.966,17.637-0.001l10.428-8.229v3.127c0,16.344,13.297,29.642,29.642,29.642h258.695 c16.345,0,29.642-13.298,29.642-29.642V259.313C512,242.969,498.703,229.671,482.358,229.671z M411.051,303.88 c4.465,0,8.084-3.619,8.084-8.084V283.01c4.233,2.685,7.048,7.414,7.048,12.786c0,8.344-6.789,15.133-15.133,15.133 s-15.133-6.789-15.133-15.133c0-5.372,2.814-10.101,7.048-12.786v12.786C402.967,300.261,406.586,303.88,411.051,303.88z M303.054,226.146c0-27.546,22.411-49.957,49.956-49.957s49.956,22.411,49.956,49.957v3.525h-99.912V226.146z M294.97,303.88 c4.465,0,8.084-3.619,8.084-8.084V283.01c4.233,2.685,7.048,7.414,7.048,12.786c0,8.344-6.789,15.133-15.133,15.133 s-15.133-6.789-15.133-15.133c0-5.372,2.815-10.101,7.048-12.786v12.786C286.886,300.261,290.506,303.88,294.97,303.88z M137.432,280.249c-66.865,0-121.263-54.4-121.263-121.265S70.567,37.718,137.432,37.718s121.263,54.4,121.263,121.265 c0,25.654-7.845,50.007-22.73,70.686h-12.302c-16.345,0-29.642,13.298-29.642,29.642v6.946 C176.666,275.425,157.201,280.249,137.432,280.249z M197.179,445.362c-0.052,0.04-0.103,0.081-0.155,0.122l-19.555,15.432 v-59.359l19.582,15.454c0.033,0.026,0.067,0.053,0.1,0.079l17.927,14.146L197.179,445.362z M495.832,471.579 c0,7.43-6.044,13.474-13.474,13.474H223.663c-7.43,0-13.474-6.045-13.474-13.474v-15.888l15.324-12.094 c3.96-3.125,6.232-7.63,6.233-12.36c0-4.73-2.271-9.235-6.233-12.362l-15.324-12.094V271.165c0.001-0.099,0.001-0.198,0-0.296 v-11.556c0-7.43,6.044-13.474,13.474-13.474h16.274c0.055,0,0.11,0,0.164,0h46.784v19.714 c-13.353,3.573-23.217,15.778-23.217,30.242c0,17.26,14.042,31.302,31.301,31.302s31.301-14.042,31.301-31.302 c0-14.464-9.863-26.669-23.217-30.242v-19.714h99.912v19.714c-13.353,3.573-23.217,15.778-23.217,30.242 c0,17.26,14.042,31.302,31.301,31.302c17.259,0,31.301-14.042,31.301-31.302c0-14.464-9.863-26.669-23.217-30.242v-19.714h63.224 c7.43,0,13.474,6.045,13.474,13.474V471.579z">
                        </path>
                        <path
                            d="M286.486,71.559l41.92,33.082c5.028,3.967,12.611,3.969,17.641-0.001c2.957-2.335,4.652-5.744,4.652-9.353V67.283h88.543 c19.316,0,35.032,15.715,35.032,35.033v97.013c0,4.466,3.62,8.084,8.084,8.084c4.465,0,8.084-3.618,8.084-8.084v-97.014 c0-28.232-22.969-51.201-51.2-51.201h-88.544V23.107c0-3.609-1.695-7.018-4.652-9.353c-0.001,0-0.002-0.001-0.003-0.002 c-5.026-3.964-12.608-3.966-17.637,0.001l-41.92,33.083c-3.961,3.126-6.234,7.631-6.234,12.361 C280.253,63.926,282.524,68.432,286.486,71.559z M334.53,29.519v59.359l-37.609-29.68L334.53,29.519z">
                        </path>
                        <path
                            d="M160.915,93.376V72.751c0-4.466-3.62-8.084-8.084-8.084s-8.084,3.619-8.084,8.084v16.935 c-4.807-0.503-9.821-0.503-14.628,0V72.751c0-4.466-3.62-8.084-8.084-8.084c-4.465,0-8.084,3.619-8.084,8.084v20.625 c-26.902,9.658-46.195,35.422-46.195,65.607s19.293,55.949,46.195,65.607v20.625c0,4.466,3.62,8.084,8.084,8.084 c4.465,0,8.084-3.618,8.084-8.084v-16.935c4.807,0.503,9.821,0.503,14.628,0v16.935c0,4.466,3.62,8.084,8.084,8.084 s8.084-3.618,8.084-8.084v-20.625c26.902-9.658,46.195-35.422,46.195-65.607S187.817,103.034,160.915,93.376z M113.949,207.062 c-17.766-8.714-30.027-26.99-30.027-48.077c0-21.087,12.261-39.364,30.027-48.077V207.062z M144.746,211.996 c-4.783,0.656-9.847,0.656-14.628,0V105.971c4.783-0.656,9.847-0.656,14.628,0V211.996z M160.915,207.062v-96.156 c17.766,8.714,30.027,26.99,30.027,48.077S178.68,198.348,160.915,207.062z">
                        </path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    <svg v-else-if="name == 'purchase-blue'" fill="currentColor" height="25" width="25" version="1.1" id="Layer_1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
        xml:space="preserve">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <g>
                    <g>
                        <path
                            d="M482.358,229.671h-63.223v-3.525c0-36.462-29.664-66.126-66.125-66.126c-36.461,0-66.125,29.664-66.125,66.126v3.525 h-31.563c12.826-21.276,19.54-45.428,19.54-70.687c0-75.781-61.651-137.434-137.432-137.434S0,83.202,0,158.983 s61.651,137.434,137.432,137.434c19.577,0,38.896-4.178,56.589-12.167v109.772l-10.426-8.229 c-5.027-3.966-12.61-3.968-17.641,0.001c-2.957,2.335-4.652,5.744-4.652,9.353v28.005H72.758 c-19.316,0-35.032-15.715-35.032-35.033v-97.012c0-4.466-3.62-8.084-8.084-8.084c-4.465,0-8.084,3.618-8.084,8.084v97.013 c0,28.232,22.969,51.201,51.2,51.201h88.544v28.006c0,3.609,1.695,7.018,4.652,9.353c0.001,0,0.002,0.001,0.003,0.002 c5.026,3.964,12.608,3.966,17.637-0.001l10.428-8.229v3.127c0,16.344,13.297,29.642,29.642,29.642h258.695 c16.345,0,29.642-13.298,29.642-29.642V259.313C512,242.969,498.703,229.671,482.358,229.671z M411.051,303.88 c4.465,0,8.084-3.619,8.084-8.084V283.01c4.233,2.685,7.048,7.414,7.048,12.786c0,8.344-6.789,15.133-15.133,15.133 s-15.133-6.789-15.133-15.133c0-5.372,2.814-10.101,7.048-12.786v12.786C402.967,300.261,406.586,303.88,411.051,303.88z M303.054,226.146c0-27.546,22.411-49.957,49.956-49.957s49.956,22.411,49.956,49.957v3.525h-99.912V226.146z M294.97,303.88 c4.465,0,8.084-3.619,8.084-8.084V283.01c4.233,2.685,7.048,7.414,7.048,12.786c0,8.344-6.789,15.133-15.133,15.133 s-15.133-6.789-15.133-15.133c0-5.372,2.815-10.101,7.048-12.786v12.786C286.886,300.261,290.506,303.88,294.97,303.88z M137.432,280.249c-66.865,0-121.263-54.4-121.263-121.265S70.567,37.718,137.432,37.718s121.263,54.4,121.263,121.265 c0,25.654-7.845,50.007-22.73,70.686h-12.302c-16.345,0-29.642,13.298-29.642,29.642v6.946 C176.666,275.425,157.201,280.249,137.432,280.249z M197.179,445.362c-0.052,0.04-0.103,0.081-0.155,0.122l-19.555,15.432 v-59.359l19.582,15.454c0.033,0.026,0.067,0.053,0.1,0.079l17.927,14.146L197.179,445.362z M495.832,471.579 c0,7.43-6.044,13.474-13.474,13.474H223.663c-7.43,0-13.474-6.045-13.474-13.474v-15.888l15.324-12.094 c3.96-3.125,6.232-7.63,6.233-12.36c0-4.73-2.271-9.235-6.233-12.362l-15.324-12.094V271.165c0.001-0.099,0.001-0.198,0-0.296 v-11.556c0-7.43,6.044-13.474,13.474-13.474h16.274c0.055,0,0.11,0,0.164,0h46.784v19.714 c-13.353,3.573-23.217,15.778-23.217,30.242c0,17.26,14.042,31.302,31.301,31.302s31.301-14.042,31.301-31.302 c0-14.464-9.863-26.669-23.217-30.242v-19.714h99.912v19.714c-13.353,3.573-23.217,15.778-23.217,30.242 c0,17.26,14.042,31.302,31.301,31.302c17.259,0,31.301-14.042,31.301-31.302c0-14.464-9.863-26.669-23.217-30.242v-19.714h63.224 c7.43,0,13.474,6.045,13.474,13.474V471.579z">
                        </path>
                        <path
                            d="M286.486,71.559l41.92,33.082c5.028,3.967,12.611,3.969,17.641-0.001c2.957-2.335,4.652-5.744,4.652-9.353V67.283h88.543 c19.316,0,35.032,15.715,35.032,35.033v97.013c0,4.466,3.62,8.084,8.084,8.084c4.465,0,8.084-3.618,8.084-8.084v-97.014 c0-28.232-22.969-51.201-51.2-51.201h-88.544V23.107c0-3.609-1.695-7.018-4.652-9.353c-0.001,0-0.002-0.001-0.003-0.002 c-5.026-3.964-12.608-3.966-17.637,0.001l-41.92,33.083c-3.961,3.126-6.234,7.631-6.234,12.361 C280.253,63.926,282.524,68.432,286.486,71.559z M334.53,29.519v59.359l-37.609-29.68L334.53,29.519z">
                        </path>
                        <path
                            d="M160.915,93.376V72.751c0-4.466-3.62-8.084-8.084-8.084s-8.084,3.619-8.084,8.084v16.935 c-4.807-0.503-9.821-0.503-14.628,0V72.751c0-4.466-3.62-8.084-8.084-8.084c-4.465,0-8.084,3.619-8.084,8.084v20.625 c-26.902,9.658-46.195,35.422-46.195,65.607s19.293,55.949,46.195,65.607v20.625c0,4.466,3.62,8.084,8.084,8.084 c4.465,0,8.084-3.618,8.084-8.084v-16.935c4.807,0.503,9.821,0.503,14.628,0v16.935c0,4.466,3.62,8.084,8.084,8.084 s8.084-3.618,8.084-8.084v-20.625c26.902-9.658,46.195-35.422,46.195-65.607S187.817,103.034,160.915,93.376z M113.949,207.062 c-17.766-8.714-30.027-26.99-30.027-48.077c0-21.087,12.261-39.364,30.027-48.077V207.062z M144.746,211.996 c-4.783,0.656-9.847,0.656-14.628,0V105.971c4.783-0.656,9.847-0.656,14.628,0V211.996z M160.915,207.062v-96.156 c17.766,8.714,30.027,26.99,30.027,48.077S178.68,198.348,160.915,207.062z">
                        </path>
                    </g>
                </g>
            </g>
        </g>
    </svg>

    <svg v-else-if="name == 'chat'" height="25" width="25" fill="currentColor" version="1.1" id="Layer_1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
        xml:space="preserve">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path id="conversation_2_"
                d="M11.5,17.998c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1S11.5,17.446,11.5,17.998z M14.5,16.998 c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S15.052,16.998,14.5,16.998z M6.5,16.998c-0.552,0-1,0.448-1,1s0.448,1,1,1 s1-0.448,1-1S7.052,16.998,6.5,16.998z M23,6c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S23.552,6,23,6z M27,6 c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S27.552,6,27,6z M19,6c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S19.552,6,19,6z M11.299,30.8l-4-5.999c-0.066-0.1-0.179-0.16-0.299-0.16H3c-0.904,0-1.64-0.735-1.64-1.64V13c0-0.904,0.736-1.64,1.64-1.64h15 c0.904,0,1.64,0.736,1.64,1.64v10.001c0,0.904-0.735,1.64-1.64,1.64h-7v0.721h7c1.302,0,2.36-1.059,2.36-2.36V13.36H23v-0.72h-2.667 c-0.174-1.131-1.154-2-2.333-2h-2.64V3c0-0.904,0.736-1.64,1.64-1.64h12c0.904,0,1.64,0.736,1.64,1.64v8 c0,0.904-0.735,1.64-1.64,1.64h-3c-0.137,0-0.261,0.077-0.322,0.199l-2,4l0.645,0.322l1.9-3.801H29c1.302,0,2.36-1.059,2.36-2.36V3 c0-1.301-1.059-2.36-2.36-2.36H17c-1.301,0-2.36,1.059-2.36,2.36v7.64H3c-1.301,0-2.36,1.059-2.36,2.36v10.001 c0,1.302,1.059,2.36,2.36,2.36h3.807l3.894,5.839L11.299,30.8z">
            </path>
            <rect id="_Transparent_Rectangle" style="fill:none;" width="32" height="32"></rect>
        </g>
    </svg>

    <svg v-else-if="name == 'more'" height="18px" width="20px" fill="#000000" viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M18 27c0-1.647-1.345-3-3-3s-3 1.353-3 3 1.345 3 3 3 3-1.353 3-3zm-1 0c0 1.108-.886 2-2 2-1.113 0-2-.892-2-2s.886-2 2-2c1.114 0 2 .892 2 2zm1-12c0-1.647-1.345-3-3-3s-3 1.353-3 3 1.345 3 3 3 3-1.353 3-3zm-1 0c0 1.108-.886 2-2 2-1.113 0-2-.892-2-2s.886-2 2-2c1.114 0 2 .892 2 2zm1-12c0-1.647-1.345-3-3-3s-3 1.353-3 3 1.345 3 3 3 3-1.353 3-3zm-1 0c0 1.108-.886 2-2 2-1.113 0-2-.892-2-2s.886-2 2-2c1.114 0 2 .892 2 2z">
            </path>
        </g>
    </svg>

    <svg v-else-if="name == 'attach-file'" width="25" height="25" viewBox="0 0 19 19" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.76133 9.61881L7.80591 11.5742C6.72133 12.6588 6.72133 14.4084 7.80591 15.493C8.89049 16.5776 10.6401 16.5776 11.7247 15.493L14.8042 12.4134C16.9655 10.2521 16.9655 6.73714 14.8042 4.57589C12.643 2.41464 9.128 2.41464 6.96675 4.57589L3.61008 7.93256C1.75758 9.78506 1.75758 12.7934 3.61008 14.6538"
            stroke="#292D32" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-else-if="name == 'send-sms'" height="30" width="30" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path opacity="0.34" d="M10.1094 13.6501L13.6894 10.0601" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </svg>
    <svg v-else-if="name == 'orders'" height="25" width="25" viewBox="0 0 1024 1024" fill="currentColor" class="icon"
        version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M343.376 717.726a7.984 7.984 0 0 1-7.966-7.388 7.99 7.99 0 0 1 7.374-8.576L945 656.472l61.52-384.42H224.056c-4.422 0-8-3.576-8-7.998a7.994 7.994 0 0 1 8-7.998h791.836a8.01 8.01 0 0 1 7.904 9.264l-63.986 399.918a8.022 8.022 0 0 1-7.312 6.716l-608.514 45.756c-0.202 0.016-0.406 0.016-0.608 0.016zM312.03 719.96a7.988 7.988 0 0 1-7.716-5.922L128.35 58.168a7.99 7.99 0 0 1 5.654-9.794c4.266-1.124 8.654 1.376 9.794 5.654l175.962 655.874a7.994 7.994 0 0 1-5.654 9.794 7.988 7.988 0 0 1-2.076 0.264z"
                fill=""></path>
            <path
                d="M343.382 717.758a7.992 7.992 0 0 1-7.716-5.92L151.078 26.182a8 8 0 0 1 15.45-4.154l184.586 685.654a8.012 8.012 0 0 1-5.646 9.81 7.97 7.97 0 0 1-2.086 0.266zM136.074 64.096H24.098a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h111.976a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998z"
                fill=""></path>
            <path
                d="M158.804 32.104H24.098a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8h134.708a7.994 7.994 0 0 1 7.998 8 7.998 7.998 0 0 1-8 7.998z"
                fill=""></path>
            <path
                d="M24.098 64.096C10.866 64.096 0.102 53.332 0.102 40.102c0-13.232 10.764-23.996 23.996-23.996a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998 8.002 8.002 0 0 0-7.998 7.998 8.004 8.004 0 0 0 7.998 7.998 7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM951.904 368.034H301.508a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h650.396c4.422 0 8 3.576 8 7.998a7.994 7.994 0 0 1-8 7.998zM919.912 480.01H349.498c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h570.414c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998zM887.918 591.988H381.492a7.994 7.994 0 0 1-7.998-8 7.994 7.994 0 0 1 7.998-7.998h506.426a7.994 7.994 0 0 1 7.998 7.998c0 4.422-3.576 8-7.998 8zM296.034 815.942a7.9 7.9 0 0 1-3.468-0.796 7.982 7.982 0 0 1-3.724-10.67l47.35-98.184c1.912-3.966 6.694-5.624 10.678-3.732a8.004 8.004 0 0 1 3.724 10.684l-47.35 98.184a7.986 7.986 0 0 1-7.21 4.514zM264.36 815.942a7.89 7.89 0 0 1-3.466-0.796 7.98 7.98 0 0 1-3.726-10.67l47.35-98.184c1.914-3.966 6.694-5.624 10.678-3.732a8.006 8.006 0 0 1 3.726 10.684l-47.35 98.184a7.988 7.988 0 0 1-7.212 4.514zM919.912 879.928h-575.88a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8h575.88a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998zM919.912 847.934h-575.88a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h575.88a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.998z"
                fill=""></path>
            <path
                d="M344.032 879.928c-48.514 0-87.982-32.292-87.982-71.986a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 30.87 32.292 55.988 71.986 55.988a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998z"
                fill=""></path>
            <path
                d="M344.032 847.934c-26.432 0-55.988-17.106-55.988-39.992a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 11.67 20.558 23.996 39.992 23.996a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM919.912 879.928a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.576-8 7.998-8a8 8 0 0 0 7.998-7.996c0-4.406-3.592-8-7.998-8a7.992 7.992 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998c13.23 0 23.994 10.764 23.994 23.996 0 13.23-10.764 23.994-23.994 23.994zM855.926 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v287.942a7.994 7.994 0 0 1-7.998 7.996zM743.948 623.98a7.992 7.992 0 0 1-7.996-7.998v-287.94a7.992 7.992 0 0 1 7.996-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM631.97 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM519.994 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v287.942a7.994 7.994 0 0 1-8 7.996zM408.018 623.98a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v287.942a7.992 7.992 0 0 1-7.998 7.996zM400.02 1007.9c-35.282 0-63.986-28.698-63.986-63.986 0-6.216 0.89-12.374 2.654-18.278a8 8 0 0 1 9.944-5.376 7.978 7.978 0 0 1 5.382 9.938 48.29 48.29 0 0 0-1.984 13.714c0 26.462 21.528 47.99 47.99 47.99s47.99-21.528 47.99-47.99c0-4.672-0.672-9.28-1.984-13.714a7.978 7.978 0 0 1 5.38-9.938 7.972 7.972 0 0 1 9.944 5.376 63.764 63.764 0 0 1 2.656 18.278c0 35.29-28.706 63.986-63.986 63.986z"
                fill=""></path>
            <path
                d="M400.02 967.91c-17.988 0-35.804-42.118-47.576-77.454a7.988 7.988 0 0 1 5.052-10.108 7.968 7.968 0 0 1 10.116 5.044c11.022 33.056 26.442 64.176 32.986 66.596 5.388-2.42 20.808-33.54 31.828-66.596a7.968 7.968 0 0 1 10.116-5.044 7.984 7.984 0 0 1 5.054 10.108c-11.772 35.336-29.588 77.454-47.576 77.454zM815.934 1007.9c-35.274 0-63.986-28.698-63.986-63.986 0-6.232 0.906-12.388 2.656-18.292a8.026 8.026 0 0 1 9.964-5.36 8.024 8.024 0 0 1 5.376 9.954c-1.328 4.42-2 9.028-2 13.7 0 26.462 21.528 47.99 47.99 47.99s47.99-21.528 47.99-47.99c0-4.672-0.656-9.28-1.984-13.714a8.032 8.032 0 0 1 5.39-9.954 8.006 8.006 0 0 1 9.95 5.406 64.284 64.284 0 0 1 2.64 18.262c0 35.288-28.712 63.984-63.986 63.984z"
                fill=""></path>
            <path
                d="M815.934 967.91c-17.996 0-35.804-42.118-47.584-77.454a8 8 0 0 1 5.062-10.108 7.988 7.988 0 0 1 10.122 5.044c11.014 33.056 26.434 64.176 32.978 66.596 5.388-2.42 20.806-33.54 31.822-66.596a7.982 7.982 0 0 1 10.122-5.044 7.994 7.994 0 0 1 5.062 10.108c-11.78 35.336-29.588 77.454-47.584 77.454z"
                fill=""></path>
        </g>
    </svg>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    name: {
        default: "",
        type: String,
    },
    color: {
        default: ''
    }
});
const { name } = props;
</script>

<style></style>
