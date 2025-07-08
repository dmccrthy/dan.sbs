<template>
    <footer
        class="h-32 bg-main text-center mt-4 mb-16 rounded-2xl flex flex-col sm:flex-row items-center justify-center"
    >
        <p class="font-medium mb-4 sm:mb-0 sm:mr-auto">
            <span class="hidden md:contents">Copyright</span> © 2025 Dan
            McCarthy
        </p>
        <div class="flex gap-4">
            <a
                href="mailto:info@dmccarthy.org"
                aria-label="Link to my email"
                target="_blank"
            >
                <Icon name="lucide:mail" mode="svg" />
            </a>
            <a
                href="https://github.com/dmccrthy"
                aria-label="Link to my Github"
                target="_blank"
            >
                <Icon name="lucide:github" mode="svg" />
            </a>
            <a
                href="https://www.linkedin.com/in/danmcc/"
                aria-label="Link to my Linkedin"
                target="_blank"
            >
                <Icon name="lucide:linkedin" mode="svg" />
            </a>
        </div>
    </footer>
</template>
