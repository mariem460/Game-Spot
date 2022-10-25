<template>
    <div class="signin_container p_top">
        <Form @submit="onSubmit"  :validation-schema="formSchema">
            <h1>hello</h1>

        </Form>

    </div>

</template>
<script>
    import {Field, Form, ErrorMessage} from 'vee-validate'
    import * as yup from 'yup'
   export default {
    components:{
        // eslint-disable-next-line vue/no-unused-components
        Field,
        Form,
        // eslint-disable-next-line vue/no-unused-components
        ErrorMessage
    },
    data(){
        return{
            type:false,
            formSchema:{
                email: yup.string()
                .required('the email is required !')
                .email('not a valid email'),
                password: yup.string().required('the password is required')

            }
            
        }
    },
    methods: {
        onSubmit(values, {resetForm}){
            if(!this.type){
                //signin
                console.log(values, "signin")
            }else{
                console.log(values, "signUp")
                //signup
            }
            resetForm()

        }
    },
   }
</script>