export const headerdata = [
    {
        title: "Intro Actions",
        code: `
        <header>
  <div class="mx-auto max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>

        <p class="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span class="text-sm font-medium"> View Website </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <button
          class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Post
        </button>
      </div>
    </div>
  </div>
</header>
        `
    },
    {
        title: "Intro Actions with Background",
        code: `
<header class="bg-gray-100">
  <div class="mx-auto max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>

        <p class="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span class="text-sm font-medium"> View Website </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <button
          class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Post
        </button>
      </div>
    </div>
  </div>
</header>`
    },
    {
        title: "Intro with Search and Mini Navigation",
        code: `
      <header class="bg-gray-50">
        <div class="mx-auto max-w-screen px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex items-center justify-end gap-4">
            <div class="flex items-center gap-4">
              <div class="relative">
                <label class="sr-only" for="search"> Search </label>
      
                <input
                  class="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search website..."
                />
      
                <button
                  type="button"
                  class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <span class="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
      
              <a
                href="#"
                class="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <span class="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
            </div>
      
            <span aria-hidden="true" class="block h-6 w-px rounded-full bg-gray-200"></span>
      
            <a href="#" class="block shrink-0">
              <span class="sr-only">Profile</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>
      
          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>
      
            <p class="mt-1.5 text-sm text-gray-500">
              Your website has seen a 52% increase in traffic in the last month. Keep it up! 🚀
            </p>
          </div>
        </div>
      </header>
        `
    },
    {
        title: "Intro with Justified Search and Mini Navigation",
        code: `
      <header class="bg-gray-50">
        <div class="mx-auto max-w-screen px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex items-center sm:justify-between sm:gap-4">
            <div class="relative hidden sm:block">
              <label class="sr-only" for="search"> Search </label>
      
              <input
                class="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />
      
              <button
                type="button"
                class="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span class="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
      
            <div class="flex flex-1 items-center justify-between gap-8 sm:justify-end">
              <div class="flex gap-4">
                <button
                  type="button"
                  class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                >
                  <span class="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
      
                <a
                  href="#"
                  class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span class="sr-only">Academy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </a>
      
                <a
                  href="#"
                  class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span class="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>
              </div>
      
              <button type="button" class="group flex shrink-0 items-center rounded-lg transition">
                <span class="sr-only">Menu</span>
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="h-10 w-10 rounded-full object-cover"
                />
      
                <p class="ms-2 hidden text-left text-xs sm:block">
                  <strong class="block font-medium">Eric Frusciante</strong>
      
                  <span class="text-gray-500"> eric@frusciante.com </span>
                </p>
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
      
          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>
      
            <p class="mt-1.5 text-sm text-gray-500">
              Your website has seen a 52% increase in traffic in the last month. Keep it up! 🚀
            </p>
          </div>
        </div>
      </header>
        `
    },
    {
        title: "Left Aligned",
        code: `
        <header class="bg-white">
  <div class="mx-auto flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a class="block text-teal-600" href="/">
      <span class="sr-only">Home</span>
      <svg class="h-12 w-12 object-contain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#03a9fc">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
      <path d="M12 3V21M9.99995 4L12 6L14 4M9.99995 20L12 18L14 20M4.23218 7.5L19.8206 16.5M4.11133 9.50885L6.57017 8.85L5.91133 6.39115M18.141 17.6089L17.4821 15.15L19.941 14.4912M19.8205 7.5L4.232 16.5M18.1413 6.39115L17.4825 8.85L19.9413 9.50885M4.11166 14.4911L6.57051 15.15L5.91166 17.6088" stroke="#0fafff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      </path> </g>
      </svg>
    </a>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> About </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Careers </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> History </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Services </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <a
            class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            href="/"
          >
            Login
          </a>

          <a
            class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block"
            href="/"
          >
            Register
          </a>
        </div>

        <button
          class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
        `
    },
    {
        title: "Center Aligned",
        code: `
        <header class="bg-white">
  <div class="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-12">
        <a class="block text-teal-600" href="/">
          <span class="sr-only">Home</span>
          <svg class="h-12 w-12 object-contain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#03a9fc">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
      <path d="M12 3V21M9.99995 4L12 6L14 4M9.99995 20L12 18L14 20M4.23218 7.5L19.8206 16.5M4.11133 9.50885L6.57017 8.85L5.91133 6.39115M18.141 17.6089L17.4821 15.15L19.941 14.4912M19.8205 7.5L4.232 16.5M18.1413 6.39115L17.4825 8.85L19.9413 9.50885M4.11166 14.4911L6.57051 15.15L5.91166 17.6088" stroke="#0fafff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      </path> </g>
      </svg>
        </a>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> About </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Careers </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> History </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Services </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <a
            class="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/"
          >
            Login
          </a>

          <div class="hidden sm:flex">
            <a
              class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
              href="/"
            >
              Register
            </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
        `
    },
    {
        title: "Right Aligned",
        code: `
        <header class="bg-white">
  <div class="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <a class="block text-teal-600" href="/">
          <span class="sr-only">Home</span>
          <svg class="h-12 w-12 object-contain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#03a9fc">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
      <path d="M12 3V21M9.99995 4L12 6L14 4M9.99995 20L12 18L14 20M4.23218 7.5L19.8206 16.5M4.11133 9.50885L6.57017 8.85L5.91133 6.39115M18.141 17.6089L17.4821 15.15L19.941 14.4912M19.8205 7.5L4.232 16.5M18.1413 6.39115L17.4825 8.85L19.9413 9.50885M4.11166 14.4911L6.57051 15.15L5.91166 17.6088" stroke="#0fafff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      </path> </g>
      </svg>
        </a>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> About </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Careers </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> History </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Services </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
              class="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
              Login
            </a>

            <div class="hidden sm:flex">
              <a
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
                href="/"
              >
                Register
              </a>
            </div>
          </div>

          <div class="block md:hidden">
            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
        `
    },
    {
        title: "Navbar with search",
        code: `
<nav class="bg-white border-gray-200 ">
<div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
<svg class="h-12 w-12 object-contain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#03a9fc">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
<g id="SVGRepo_iconCarrier"> 
<path d="M12 3V21M9.99995 4L12 6L14 4M9.99995 20L12 18L14 20M4.23218 7.5L19.8206 16.5M4.11133 9.50885L6.57017 8.85L5.91133 6.39115M18.141 17.6089L17.4821 15.15L19.941 14.4912M19.8205 7.5L4.232 16.5M18.1413 6.39115L17.4825 8.85L19.9413 9.50885M4.11166 14.4911L6.57051 15.15L5.91166 17.6088" stroke="#0fafff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
</path> </g>
</svg>
    <span class="self-center text-2xl font-semibold whitespace-nowrap ">Uiforge</span>
</a>
<div class="flex md:order-2">
  <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1">
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
    <span class="sr-only">Search</span>
  </button>
  <div class="relative hidden md:block">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search icon</span>
    </div>
    <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500" placeholder="Search...">
  </div>
  <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-search" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>
</div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
    <div class="relative mt-3 md:hidden">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search...">
    </div>
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
      </li>
    </ul>
  </div>
</div>
</nav>

        `
    },
    {
        title: "Navbar with submenu",
        code: `
        

<nav class="bg-gray-100 border-gray-200 ">
<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
    <svg class="h-12 w-12 object-contain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#03a9fc">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
    <path d="M12 3V21M9.99995 4L12 6L14 4M9.99995 20L12 18L14 20M4.23218 7.5L19.8206 16.5M4.11133 9.50885L6.57017 8.85L5.91133 6.39115M18.141 17.6089L17.4821 15.15L19.941 14.4912M19.8205 7.5L4.232 16.5M18.1413 6.39115L17.4825 8.85L19.9413 9.50885M4.11166 14.4911L6.57051 15.15L5.91166 17.6088" stroke="#0fafff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path> </g>
    </svg>
        <span class="self-center text-2xl font-semibold whitespace-nowrap ">Uiforge</span>
    </a>
    <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="tel:5541251234" class="text-sm  text-gray-500  hover:underline">(696) 122-1234</a>
        <a href="#" class="text-sm  text-blue-600  hover:underline">Login</a>
    </div>
</div>
</nav>
<nav class="bg-gray-200">
<div class="max-w-screen px-4 py-3 mx-auto">
    <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
                <a href="#" class="text-gray-900  hover:underline" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" class="text-gray-900  hover:underline">Company</a>
            </li>
            <li>
                <a href="#" class="text-gray-900  hover:underline">Team</a>
            </li>
            <li>
                <a href="#" class="text-gray-900  hover:underline">Features</a>
            </li>
        </ul>
    </div>
</div>
</nav>

        `
    },
]