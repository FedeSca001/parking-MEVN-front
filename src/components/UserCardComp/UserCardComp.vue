<template>
        <ul>
                <h2 class="title">Users</h2>
                <li v-for="item in get.listUsers" :key="item.id" class="liItem">
                        Name: {{ item.name }} | | Age: {{ item.age }} | | Dni:
                        {{ item.dni }} | | Phone: {{ item.phone }} | | Mail:
                        {{ item.mail }}
                </li>
        </ul>
</template>

<script>
        import { useUsers } from "../../store/users";
        export default {
                setup() {
                        const get = useUsers();
                        get.getUsers();
                        return {
                                get,
                        };
                },
        };
</script>

<style scoped>
        .title {
                margin: 2vw 4vw;
                font-size: 3vw;
        }
        .liItem {
                font-size: 1.9vw;
                font-weight: 700;
                margin: 0.5vw 5vw;
                list-style: none;
        }
</style>
