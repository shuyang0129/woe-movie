<template>
    <div
        class="fixed inset-0 z-50 bg-gray-800 p-6 pb-8 lg:relative lg:rounded-sm lg:shadow-md lg:z-30"
    >
        <div class="mx-auto max-w-lg">
            <!-- Close -->
            <svg
                class="fill-current text-gray-400 hover:text-gray-200 w-5 h-5 ml-auto lg:hidden"
                viewBox="0 0 20 20"
            >
                <path
                    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                />
            </svg>
            <!-- Keyword -->
            <label class="block">
                <span class="form-label">Filter with Keyword</span>
                <input
                    type="text"
                    class="form-input w-full"
                    placeholder="Seperate with comma, ex spider man, xman"
                />
            </label>
            <!-- Genre -->
            <span class="form-label">Genre</span>
            <select class="form-select w-full">
                <option>Cemdy</option>
                <option>Horral</option>
            </select>
            <!-- Original Language -->
            <span class="form-label">Original Language</span>
            <select class="form-select w-full">
                <option>EN</option>
                <option>JP</option>
            </select>
            <!-- Sort By -->
            <span class="form-label">Sort By</span>
            <div>
                <label class="flex items-center">
                    <input
                        type="radio"
                        class="form-radio"
                        name="accountType"
                        value="personal"
                        checked
                    />
                    <span class="ml-2">Genre</span>
                </label>
                <label class="flex items-center mt-1">
                    <input type="radio" class="form-radio" name="accountType" value="busines" />
                    <span class="ml-2">Rating</span>
                </label>
            </div>
            <!-- Year Range -->
            <span class="form-label">Release Year</span>
            <label class="block">
                <select class="form-select block w-full">
                    <option>1988</option>
                    <option>1988</option>
                </select>
            </label>
            <!-- Inlclude Video -->
            <div class="mt-6 mb-2">
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox text-gray-600" />
                    <span class="ml-2">Include Video</span>
                </label>
            </div>
            <!-- Submit & Reset -->
            <button class="w-full btn btn-indigo-3d mt-6 rounded">Submit</button>
            <button class="w-full btn btn-gray-3d mt-4 rounded">Reset</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Sideabr extends Vue {}
</script>
