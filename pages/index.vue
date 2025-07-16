<template>
    <main>
        <section class="flex flex-col md:flex-row items-center pb-10 md:h-96">
            <div class="pb-8 md:pb-0 md:w-1/2">
                <h2>About Me:</h2>
                <p>
                    Hi, my name's Dan and I'm a
                    <i>Software Developer</i> from <i>New Hampshire</i> with
                    interests in computer networking and cybersecurity. I’m
                    currently working towards a BS in Computer Science at the
                    University of New Hampshire. If you want to get in touch, my
                    links are below.
                </p>
            </div>
            <NuxtImg
                src="/images/headshot.jpg"
                width="400"
                alt="Picture of Dan McCarthy"
                class="size-56 2xl:size-60 rounded-full p-1 border-4 border-highlight mx-auto drop-shadow-2xl"
            />
        </section>
    </main>
</template>

<script lang="ts" setup>
usePageMeta(
    "Hi, I'm Dan McCarthy",
    "Hi, my name's Dan and I'm an Software Developer from New Hampshire with interests in IT and cybersecurity.",
);
</script>
