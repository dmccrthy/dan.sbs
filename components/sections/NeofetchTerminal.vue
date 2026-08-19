<template>
  <section class="py-10">
    <div class="rounded-lg overflow-hidden">
      <div ref="transcriptRef" class="h-96 overflow-y-auto overscroll-contain">
        <div class="px-5 py-5 sm:px-6 sm:py-6">
          <div class="flex flex-col md:flex-row md:justify-between items-start gap-y-6 gap-x-10">
            <pre
              class="shrink-0 max-w-full overflow-x-auto text-font leading-5 select-none"
              aria-hidden="true"
              ><code>{{ asciiArt }}</code></pre>

            <div class="font-mono text-sm leading-6 text-font">
              <div class="font-semibold whitespace-pre">danmc@8n1.net</div>
              <div class="whitespace-pre">-------------</div>
              <div v-for="line in statLines" :key="line" class="whitespace-pre">{{ line }}</div>
            </div>
          </div>

          <div class="mt-5 font-mono text-sm leading-6 text-font">
            <div v-for="(line, i) in output" :key="i" class="whitespace-pre-wrap">
              <template v-if="line.kind === 'prompt'">
                <div class="inline text-highlight">{{ line.prompt }}</div><!-- no space
                --><div class="inline">{{ line.command }}</div>
              </template>
              <template v-else>{{ line.text }}</template>
            </div>
          </div>

          <div class="flex items-center font-mono text-sm" @click="focusInput">
            <div class="text-highlight whitespace-pre shrink-0">danmc@8n1.net:~$ </div>
            <input
              ref="inputRef"
              v-model="command"
              type="text"
              aria-label="Terminal command input"
              autocomplete="off"
              autocapitalize="off"
              spellcheck="false"
              placeholder="type 'help'"
              class="flex-1 min-w-0 bg-transparent outline-none text-font placeholder:text-font/40 caret-highlight"
              @keydown.enter="submit"
              @keydown.up.prevent="historyUp"
              @keydown.down.prevent="historyDown"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TerminalCommand {
  name: string;
  description: string;
  run: () => void;
}

type OutputLine =
  | { kind: "prompt"; prompt: string; command: string }
  | { kind: "text"; text: string };

const output = ref<OutputLine[]>([]);
const command = ref("");
const inputRef = ref<HTMLInputElement | null>(null);
const transcriptRef = ref<HTMLDivElement | null>(null);
const history = ref<string[]>([]);
let historyIndex = -1;

async function append(...lines: (OutputLine | string)[]) {
  output.value.push(
    ...lines.map((line) =>
      typeof line === "string" ? { kind: "text", text: line } : line,
    ),
  );
  await nextTick();
  const el = transcriptRef.value;
  if (el) el.scrollTop = el.scrollHeight;
}

const asciiArtVariants: string[][] = [
  [
    " .--. .-. .-..-.",
    "{ {} }|  \\{ |{ |",
    "{ {} }| }\\  {| }",
    " `--' `-' `-'`-'",
    "   .-. .-..----..-----.",
    "   |  \\{ |} |__}`-' '-'",
    " _ | }\\  {} '__}  } {",
    "{_}`-' `-'`----'  `-'",
  ],
  [
    "   ____       ___",
    "  ( __ )____ <  /",
    " / __  / __ \\/ /",
    "/ /_/ / / / / /  __",
    "\\____/_/_/_/_/  / /_",
    "    / __ \\/ _ \\/ __/",
    " _ / / / /  __/ /_",
    "(_)_/ /_/\\___/\\__/",
  ],
  [
    '.dP"o. 88b 88   .d',
    "`8b.d' 88Yb88 .d88",
    "d'`Y8b 88 Y88   88",
    "`bodP' 88  Y8   88",
    "    88b 88 888888 888888",
    "    88Yb88 88__     88",
    '.o. 88 Y88 88""     88',
    "`\"' 88  Y8 888888   88",
  ],
  [
    " ______         ____",
    "|  __  |.-----.|_   |",
    "|  __  ||     | _|  |_",
    "|______||__|__||______|",
    "                 __",
    "   .-----.-----.|  |_",
    " __|     |  -__||   _|",
    "|__|__|__|_____||____|",
  ],
  [
    ".dPYb.       d8",
    "YbwwdP 8d8b.  8",
    'dP""Yb 8P Y8  8',
    "`YbdP' 8   8  8",
    "              w",
    "  8d8b. .d88b w8ww",
    "  8P Y8 8.dP'  8",
    "w 8   8 `Y88P  Y8P",
  ],
];

const selectedVariantIndex = ref(0);

const asciiArt = computed(() => {
  const lines = asciiArtVariants[selectedVariantIndex.value] ?? asciiArtVariants[0];
  return lines.join("\n");
});

const stats = [
  { key: "OS", value: "8n1.net" },
  { key: "Host", value: "GitHub Pages" },
  { key: "Kernel", value: "Nuxt 3" },
  { key: "Shell", value: "zsh" },
  { key: "Role", value: "Software Developer" },
  { key: "Focus", value: "Networking & Security" },
  { key: "Education", value: "BS IT @ UNH" },
];

const statLines = computed(() =>
  stats.map((s) => `${s.key}: ${s.value}`),
);

function navigate(path: string) {
  append(`Opening ${path}…`);
  navigateTo(path);
}

const commands: TerminalCommand[] = [
  {
    name: "help",
    description: "Show available commands",
    run: () => {
      const lines = commands.map((c) => `  ${c.name.padEnd(10)}${c.description}`);
      append("Available commands:", ...lines);
    },
  },
  { name: "about", description: "Learn about Dan", run: () => navigate("/about") },
  { name: "projects", description: "Browse projects", run: () => navigate("/projects") },
  { name: "posts", description: "Read blog posts", run: () => navigate("/posts") },
  { name: "colophon", description: "About this site's stack", run: () => navigate("/colophon") },
  {
    name: "whoami",
    description: "Display identity",
    run: () => append("danmc — network engineer, tinkerer, awk apologist"),
  },
  {
    name: "sudo",
    description: "Attempt privileged access",
    run: () => {
      append(
        "danmc is not in the sudoers file. This incident will be reported.",
        "Nice try.",
      );
    },
  },
  { name: "clear", description: "Clear the terminal", run: () => (output.value = []) },
];

function submit() {
  const raw = command.value.trim();
  command.value = "";

  append({ kind: "prompt", prompt: "danmc@8n1.net:~$ ", command: raw });
  if (!raw) return;

  history.value.push(raw);
  historyIndex = history.value.length;

  const [name] = raw.split(/\s+/);
  const cmd = commands.find((c) => c.name === name.toLowerCase());
  if (cmd) cmd.run();
  else append(`bash: ${raw}: command not found`);
}

function historyUp() {
  if (!history.value.length) return;
  historyIndex = Math.max(0, historyIndex - 1);
  command.value = history.value[historyIndex] ?? "";
}

function historyDown() {
  historyIndex++;
  if (historyIndex >= history.value.length) {
    historyIndex = history.value.length;
    command.value = "";
    return;
  }
  command.value = history.value[historyIndex] ?? "";
}

function focusInput() {
  inputRef.value?.focus();
}

onMounted(() => {
  selectedVariantIndex.value = Math.floor(Math.random() * asciiArtVariants.length);
  append("Welcome to 8n1.net. Type 'help' for a list of commands.");
});
</script>