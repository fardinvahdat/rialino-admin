<template>
    <button
        class="flex items-center justify-center gap-1 disabled:bg-opacity-20 disabled:cursor-not-allowed disabled:bg-primary-l1 neon-button"
        :disabled="disabled">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    disabled: {
        default: false
    },
    loading: {
        default: false
    }
})
</script>
<style>
.neon-button {
    background-color: transparent;
    /* Transparent background for neon effect */
    color: #0f6aac;
    /* Neon text color */
    border: 2px solid #0f6aac;
    /* Neon border */
    padding: 5px 20px;
    /* Button padding */
    font-size: 13px;
    /* Text size */
    font-weight: bold;
    /* Bold text */
    border-radius: 10px;
    /* Rounded corners */
    text-transform: uppercase;
    /* Uppercase text */
    cursor: pointer;
    /* Pointer cursor */
    position: relative;
    /* For positioning glow effects */
    transition: background-color 0.4s, color 0.4s;
    /* Smooth transition */
    overflow: hidden;
    /* Hide overflow for effect */
}

/* Neon glow effect around button */
.neon-button::before,
.neon-button::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    /* Match button shape */
    box-shadow: 0 0 10px #40448c,
        /* Glowing layers */
        0 0 20px #40448c, 0 0 30px #40448c, 0 0 40px #40448c, 0 0 50px #40448c, 0 0 60px #40448c, 0 0 70px #40448c;
    opacity: 0;
    transition: opacity 0.4s, transform 0.4s;
}

/* Glow effect on hover */
.neon-button:hover::before,
.neon-button:hover::after {
    opacity: 1;
    transform: scale(1.1);
    /* Slightly enlarges the glow */
}

/* Neon text glow on hover */
.neon-button:hover {
    color: #40448c;
    text-shadow: 0 0 5px #be9c1c, 0 0 10px #be9c1c, 0 0 15px #be9c1c;
    border-color: transparent;
}

/* Click effect to change button background */
.neon-button:active {
    background-color: #40448c;
    /* Changes background to neon color on click */
    color: #111;
    /* Darken text color for contrast */
    box-shadow: 0 0 5px #40448c, 0 0 15px #40448c;
    /* Small inner shadow */
    transition: background-color 0.2s, color 0.2s;
}
</style>