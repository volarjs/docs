<template>
    <a class="VPNavBarTitle" href="/">
        <slot name="navbar-title">
            <svg class="logo" width="24" height="24" viewBox="0 0 426 372" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M223.392 366C218.773 374 207.226 374 202.608 366L1.68978 18C-2.92902 9.99998 2.84449 0 12.0821 0L413.918 0C423.156 0 428.929 10 424.31 18L223.392 366Z"
                    fill="url(#paint0_linear_158_112)" />
                <defs>
                    <linearGradient id="paint0_linear_158_112" x1="451" y1="23" x2="-1.99999" y2="245"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7A85EC" />
                        <stop offset="1" stop-color="#3DDCFF" />
                    </linearGradient>
                </defs>
            </svg>
            <span class="text">Volar.js</span>
        </slot>
    </a>
</template>

<style scoped>
.VPNavBarTitle {
    display: flex;
    align-items: center;
    padding-top: 1px;
    height: var(--vt-nav-height);
    transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
    opacity: 0.6;
}

.logo {
    position: relative;
}

.logo+.text {
    padding-left: 8px;
}

.text {
    font-size: 16px;
    font-weight: 500;
}
</style>
