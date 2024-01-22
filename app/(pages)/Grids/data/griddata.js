export const gridata = [
    {
        title: "1x1",
        code: `
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
  <div class="h-32 rounded-lg bg-gray-200"></div>
  <div class="h-32 rounded-lg bg-gray-200"></div>
</div>
        `
    },
    {
        title: "1x2",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
      </div>`
    },

    {
        title: "2x1",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "1x1x1",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "1x1x1x1",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "1x1x2",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
      </div>`
    },
    {
        title: "2x1x1",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "1x2x1",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "Sidebar (Left)",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "Sidebar (Right)",
        code: `<div class="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_120px] lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "Sidebar (Left - Expandable)",
        code: `<div
        class="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[120px_1fr] lg:gap-8 lg:[&:has(>*:first-child:hover)]:grid-cols-[160px_1fr]"
      >
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
    {
        title: "Sidebar (Right - Expandable)",
        code: `<div
        class="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_120px] lg:gap-8 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px]"
      >
        <div class="h-32 rounded-lg bg-gray-200"></div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div>`
    },
]