<template>
  <article class="bg-white border border-gray-200 rounded-lg shadow-md ">
        <NuxtLink href="/posts/post-detail-abc" class="block">
            <div class="aspect-square">
                <div class="flex items-center h-full">
                     <ImageObserver 
                        src="https://flowbite.com/docs/images/blog/image-1.jpg" 
                        alt="image" 
                    />
                </div>
            </div>
        </NuxtLink>
        <div class="p-5">
             <NuxtLink href="/posts/post-detail-abc">
                <th5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</th5>
            </NuxtLink>
            <p class="mb-3 font-normal text-gray-700 line-clamp-2">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <NuxtLink href="/posts/post-detail-abc" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                Read more
            </NuxtLink>
        </div>
    </article>
</template>
