export const dividerdata = [
    {
        title: "Default",
        code: `
        <span class="flex items-center">
  <span class="h-px flex-1 bg-black"></span>
  <span class="shrink-0 px-6">Lorem, ipsum dolor</span>
  <span class="h-px flex-1 bg-black"></span>
        </span>
        `
    },
    {
        title: "Blurry Divider",
        code: `<span class="relative flex justify-center">
        <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75">
        </div>
        <span class="relative z-10 bg-white px-6">Lorem, ipsum dolor</span>
      </span>`
    },
    {
        title: "Align Left",
        code: `
        <span class="flex items-center">
  <span class="pr-6">Lorem, ipsum dolor</span>
  <span class="h-px flex-1 bg-black"></span>
</span>`
    },
    {
        title: "#Align Right",
        code: `
        <span class="flex items-center">
  <span class="h-px flex-1 bg-black"></span>
  <span class="pl-6">Lorem, ipsum dolor</span>
</span>`
    }
]