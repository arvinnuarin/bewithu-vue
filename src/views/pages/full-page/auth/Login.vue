<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="h-screen flex w-full bg-img" id="page-login">
        <div class="vx-col sm:w-full md:w-1/4 lg:w-1/4">
            <vx-card>
                <div slot="no-body" >
                    <div class="vx-row h-screen">
                        <div class="vx-col sm:w-full md:w-full lg:w-full d-theme-dark-bg">
                            <!-- Logo -->
                            <div class="pt-3">

                            </div>
                            <!-- Body -->
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">LuxeCasino Login</h4>
                                    <p>Please login your account to start a new session.</p>
                                </div>
                                <!-- Google -->
                                <div class="">
                                    <vs-button color="primary" type="border" icon-pack="feather" icon="icon-home" class="float-right">Google</vs-button>
                                    <vs-button color="primary" type="border" icon-pack="feather" icon="icon-facebook">Facebook</vs-button>
                                </div>
                                <h3 class="text-center"> OR </h3>
                                <vs-divider />
                                <vs-input
                                    v-validate="'required|email|min:3'"
                                    data-vv-validate-on="blur"
                                    name="email"
                                    icon="icon icon-user"
                                    icon-pack="feather"
                                    label-placeholder="Email Address"
                                    v-model="email"
                                    class="w-full no-icon-border"/>
                                <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                                <vs-input
                                    data-vv-validate-on="blur"
                                    v-validate="'required|min:6|max:15'"
                                    type="password"
                                    name="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    label-placeholder="Password"
                                    v-model="password"
                                    class="w-full mt-6 no-icon-border" />
                                <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                                <div class="flex flex-wrap justify-between my-5">
                                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
                                    <router-link to="/auth/forgot-password">Forgot Password?</router-link>
                                </div>
                                <vs-button class="float-right mb-4" :disabled="!validateForm" @click="login">Login</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            checkbox_remember_me: false
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.email != '' && this.password != '';
        },
    },
    methods: {
        login() {
            const payload = {
                remember: this.checkbox_remember_me,
                email: this.email,
                password: this.password,
                provider: 'customers'
            }

            this.$store.dispatch('auth/login', payload);
        },

        notifyAlreadyLogedIn() {
            this.$vs.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
        },
    }
}
</script>
