<template>
    <div class='w-full flex px-4 py-4 items-center gap-4 border border-gray-600 rounded-lg'>
        <input class="block flex-grow focus:outline-none bg-transparent text-gray-900" type="search" v-model="cups"
            :placeholder="placeholder" @keyup.enter="handleSearch">
        <button
            class="flex gap-2 items-center text-white bg-primary hover:bg-primary-dark focus:outline-none rounded-lg px-4 py-2"
            @click="handleSearch" aria-label="Search" title="Search">
            <Icon name="material-symbols:search" size="1.5rem" />
            {{ $t('searchInputButton') }}
        </button>
    </div>
</template>
<script setup>

const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
});

const emit = defineEmits(["search"]);
const cups = ref("");

function handleSearch() {
    if (cups.value) {
        emit("search", cups.value);
    }
}

</script>