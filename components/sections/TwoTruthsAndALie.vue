<template>
  <section class="py-10">
    <h2>two truths and a lie</h2>
    <p class="text-base text-font/70 mt-2 mb-6">
      Can you spot the lie? Click a statement to guess.
    </p>

    <div class="grid gap-4 sm:grid-cols-3">
      <button
        v-for="(item, index) in statements"
        :key="index"
        :disabled="revealed"
        class="rounded-lg border p-5 text-left transition-all duration-300 cursor-pointer disabled:cursor-default"
        :class="cardClass(index)"
        @click="guess(index)"
      >
        <span class="text-sm font-medium mb-2 block"> Statement {{ index + 1 }} </span>
        <p class="text-base leading-relaxed">
          {{ item.statement }}
        </p>
      </button>
    </div>

    <p v-if="revealed" class="mt-6 text-center text-lg font-semibold">
      {{ correct ? "Correct! 🎉" : "Not quite! Try again next time." }}
    </p>

    <button
      v-if="revealed"
      class="mt-4 mx-auto block px-4 py-2 rounded-lg border border-alt hover:border-highlight transition-colors cursor-pointer text-sm font-medium"
      @click="reset"
    >
      Play again
    </button>
  </section>
</template>

<script setup lang="ts">
interface TruthStatement {
  statement: string;
  isLie: boolean;
}

const statements: TruthStatement[] = [
  { statement: "I once built a Snake game entirely in AWK.", isLie: false },
  {
    statement: "I have never used Microsoft Word for a school assignment.",
    isLie: false,
  },
  {
    statement: "I've been skydiving three times in two different countries.",
    isLie: true,
  },
];

const revealed = ref(false);
const selectedIndex = ref<number | null>(null);
const correct = ref(false);

function guess(index: number) {
  if (revealed.value) return;
  selectedIndex.value = index;
  revealed.value = true;
  correct.value = statements[index].isLie;
}

function reset() {
  revealed.value = false;
  selectedIndex.value = null;
  correct.value = false;
}

function cardClass(index: number) {
  if (!revealed.value) {
    return "border-alt hover:border-highlight/50";
  }
  if (statements[index].isLie) {
    return selectedIndex.value === index
      ? "border-green-500 bg-green-500/10"
      : "border-green-500/50";
  }
  return selectedIndex.value === index ? "border-red-500 bg-red-500/10" : "border-alt";
}
</script>
