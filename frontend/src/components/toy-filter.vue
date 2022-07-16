<template>
    <section class="toy-filter">
        <el-input
            v-model="filterBy.name"
            @input="filter"
            type="text"
            placeholder="Search name..."
        />

        <el-select
            v-model="filterBy.option"
            @change="sort"
            class="m-2"
            placeholder="Select"
            size="large"
        >
            <el-option
                v-for="item in userOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-select
            @change="sort"
            v-model="value"
            class="m-2"
            placeholder="Select"
            size="large"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
            <el-button class="btn sort-txt-btn" @click="sort">Sort by text</el-button>
    </section>
</template>

<script>
export default {
    name: "toy-filter",
    emits: ["filter", "setFilter"],
    data() {
        return {
            filterBy: {
                name: "",
                inStock: null,
                toSort: false,
                byLabel: [],
                option: "",
            },
            userOptions: [
                {
                    value: "All",
                    label: "All",
                },
                {
                    value: "Price",
                    label: "Price",
                },
                {
                    value: "In Stock",
                    label: "In Stock",
                },
            ],
            valueOptions: [null, true, false],
            value: "",
            options: [
                {
                    value: "On wheels",
                    label: "On wheels",
                },
                {
                    value: "Box game",
                    label: "Box game",
                },
                {
                    value: "Art",
                    label: "Art",
                },
                {
                    value: "Baby",
                    label: "Baby",
                },
                {
                    value: "Doll",
                    label: "Doll",
                },
                {
                    value: "Puzzle",
                    label: "Puzzle",
                },
                {
                    value: "Outdoor",
                    label: "Outdoor",
                },
                {
                    value: "Battery powered",
                    label: "Battery powered",
                },
            ],
        }
    },
    methods: {
        filter() {
            this.$emit("filter", JSON.parse(JSON.stringify(this.filterBy)))
        },
        sort() {
            this.filterBy.toSort = !this.filterBy.toSort
            this.$emit("setFilter", { ...this.filterBy })
        },
    },
}
</script>
