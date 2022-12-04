<template>
        <button
                @click="
                        () => {
                                swichBtn = !swichBtn;
                        }
                "
                class="swich"
        >
                Add User
        </button>
        <button
                @click="
                        () => {
                                swichFilter = !swichFilter;
                        }
                "
        >
                Filter
        </button>
        <AddUser v-if="swichBtn" />
        <FilterUsers v-if="swichFilter" :sendProp="get.listUsers" />
        <UserCardComp v-else />
</template>

<script>
        import AddUser from "@/components/AddUser/AddUser.vue";
        import FilterUsers from "@/components/FilterUsers/FilterUsers.vue";
        import { useUsers } from "../../store/users";
        import UserCardComp from "@/components/UserCardComp/UserCardComp.vue";
        export default {
                components: { AddUser, FilterUsers, UserCardComp },
                data() {
                        return {
                                swichBtn: false,
                                swichFilter: false,
                        };
                },
                setup() {
                        const get = useUsers();
                        get.getUsers();
                        return {
                                get,
                        };
                }
        };
</script>

<style scoped>
        .swich {
                margin: 1vw 2vw;
                font-size: 1vw;
                padding: 1vw;
                border: solid black 2.5px;
                background-color: brown;
                color: white;
                border-radius: 1.5vw;
        }
</style>
