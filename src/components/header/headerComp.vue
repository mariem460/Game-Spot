<template>
    <header>
        <div class="container header_container">
            <div class="logo">
                <router-link to="/">
                    GameSpot
                </router-link>

            </div>
            <div class="logo">
                <ul>
                    <li>
                        <router-link to="/signin">
                            Sign in
                        </router-link>
                    </li>
                    <li>
                        <span>
                           Log out
                        </span>
                    </li>
                    <li>
                        <router-link to="/user/dashboard">
                               Dashboard
                        </router-link>
                    </li>
                </ul>
            

            </div>

        </div>

    </header>
</template>

<style>

</style>